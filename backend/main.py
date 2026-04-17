import os
import time
from collections import defaultdict
from contextlib import asynccontextmanager

import resend
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, field_validator
load_dotenv()

RESEND_API_KEY = os.getenv("RESEND_API_KEY", "")
FROM_EMAIL     = os.getenv("fromemail", "onboarding@resend.dev")
TO_EMAIL       = os.getenv("toemail", "shuklakirti2004@gmail.com")
ALLOWED_ORIGINS = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "https://kirtishuklaportfolio.vercel.app/").split(",")]
MAX_REQUESTS    = 3
WINDOW_SECONDS  = 60 * 10  # 10 minutes

_rate_store: dict[str, list[float]] = defaultdict(list)

def is_rate_limited(ip: str) -> bool:
    now      = time.time()
    window   = now - WINDOW_SECONDS
    _rate_store[ip] = [t for t in _rate_store[ip] if t > window]  # prune old
    if len(_rate_store[ip]) >= MAX_REQUESTS:
        return True
    _rate_store[ip].append(now)
    return False

@asynccontextmanager
async def lifespan(app: FastAPI):
    if not RESEND_API_KEY:
        print("⚠️  WARNING: RESEND_API_KEY is not set. Emails will not be sent.")
    else:
        print(f"✅  Resend configured. Emails → {TO_EMAIL}")
    yield


app = FastAPI(
    title="Kirti Shukla Portfolio API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

    @field_validator("name")
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Name cannot be empty.")
        if len(v) > 100:
            raise ValueError("Name is too long.")
        return v

    @field_validator("message")
    @classmethod
    def message_not_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Message cannot be empty.")
        if len(v) > 2000:
            raise ValueError("Message is too long (max 2000 chars).")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str

def build_email_html(name: str, email: str, message: str) -> str:
    # Escape HTML entities to prevent injection
    safe_name    = name.replace("<", "&lt;").replace(">", "&gt;")
    safe_email   = email.replace("<", "&lt;").replace(">", "&gt;")
    safe_message = (
        message
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br/>")
    )

    return f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin:0;padding:0;background:#080c10;font-family:'DM Sans',Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0"
             style="background:#080c10;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0"
                   style="background:#0d1117;border-radius:16px;
                          border:1px solid rgba(255,255,255,0.07);
                          overflow:hidden;max-width:100%;">

              <tr>
                <td style="padding:32px 40px 24px;
                           background:linear-gradient(135deg,#0f2420,#111d28);
                           border-bottom:1px solid rgba(19,174,132,0.2);">
                  <p style="margin:0;font-size:24px;font-weight:800;
                             background:linear-gradient(135deg,#13ae84,#7feacf);
                             -webkit-background-clip:text;-webkit-text-fill-color:transparent;
                             background-clip:text;">
                    KS.
                  </p>
                  <p style="margin:8px 0 0;font-size:18px;font-weight:700;
                             color:#ffffff;letter-spacing:0.02em;">
                    New Portfolio Message
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px 40px;">

                  <!-- From -->
                  <table width="100%" cellpadding="0" cellspacing="0"
                         style="background:#141b24;border-radius:12px;
                                border:1px solid rgba(255,255,255,0.05);
                                margin-bottom:24px;">
                    <tr>
                      <td style="padding:20px 24px;">
                        <p style="margin:0 0 4px;font-size:11px;
                                   text-transform:uppercase;letter-spacing:0.12em;
                                   color:#13ae84;font-weight:700;">From</p>
                        <p style="margin:0;font-size:17px;font-weight:600;
                                   color:#ffffff;">{safe_name}</p>
                        <p style="margin:4px 0 0;font-size:14px;color:#8a9bb0;">
                          <a href="mailto:{safe_email}"
                             style="color:#36c99c;text-decoration:none;">{safe_email}</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 10px;font-size:11px;
                             text-transform:uppercase;letter-spacing:0.12em;
                             color:#13ae84;font-weight:700;">Message</p>
                  <div style="background:#141b24;border-radius:12px;
                              border:1px solid rgba(255,255,255,0.05);
                              padding:20px 24px;font-size:15px;
                              line-height:1.7;color:#c8d6e5;">
                    {safe_message}
                  </div>

                  <!-- CTA -->
                  <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
                    <tr>
                      <td style="background:#13ae84;border-radius:10px;padding:0;">
                        <a href="mailto:{safe_email}?subject=Re: Portfolio Enquiry"
                           style="display:inline-block;padding:12px 28px;
                                  font-size:14px;font-weight:700;
                                  color:#080c10;text-decoration:none;
                                  letter-spacing:0.02em;">
                          Reply to {safe_name} →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 40px;
                           border-top:1px solid rgba(255,255,255,0.05);">
                  <p style="margin:0;font-size:12px;color:#4a5a6a;">
                    Sent from your portfolio contact form at kirtishukla.dev
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """


@app.get("/", tags=["Health"])
async def health():
    """Health check — Render pings this to keep the service warm."""
    return {"status": "ok", "service": "Kirti Shukla Portfolio API"}


@app.post("/api/contact", response_model=ContactResponse, tags=["Contact"])
async def contact(body: ContactRequest, request: Request):
    
    client_ip = request.client.host if request.client else "unknown"
    if is_rate_limited(client_ip):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please wait a few minutes before trying again.",
        )

    if not RESEND_API_KEY:
        print(f"[DEV] Contact form (no API key):\n  From: {body.name} <{body.email}>\n  Msg : {body.message}")
        return ContactResponse(success=True, message="Message received (dev mode — no email sent).")

    try:
        params: resend.Emails.SendParams = {
            "from":    FROM_EMAIL,
            "to":      [TO_EMAIL],
            "subject": f"Portfolio Contact: {body.name}",
            "html":    build_email_html(body.name, body.email, body.message),
            "reply_to": body.email,
        }
        resend.Emails.send(params)

        return ContactResponse(
            success=True,
            message="Your message has been sent! I'll get back to you soon.",
        )

    except resend.BadRequestError as exc:
        raise HTTPException(status_code=400, detail=f"Email error: {exc}") from exc

    except Exception as exc:
        # Log full error server-side, return generic message to client
        print(f"[ERROR] Resend failed: {exc}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send email. Please try again later or email me directly.",
        ) from exc

from fastapi.exceptions import RequestValidationError

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    first_error = exc.errors()[0]
    msg = first_error.get("msg", "Invalid input.")
    return JSONResponse(status_code=422, content={"detail": msg})
