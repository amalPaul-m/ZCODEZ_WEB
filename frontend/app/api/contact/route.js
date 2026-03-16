import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, mobile, email, service, message } = body;

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
    }

    // Set this in .env.local:
    //   GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/XXXX/exec"
    // or use NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL if your setup prefers it.
    const WEBHOOK_URL =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

    if (!WEBHOOK_URL) {
      return NextResponse.json({
        ok: false,
        error:
          'Google Sheets webhook URL is not configured. Add GOOGLE_SHEETS_WEBHOOK_URL to .env.local.',
      }, { status: 500 });
    }
    let webhookHost = '';
    try {
      webhookHost = new URL(WEBHOOK_URL).host;
    } catch (error) {
      return NextResponse.json({
        ok: false,
        error: 'Google Sheets webhook URL is invalid. Use the Google Apps Script Web App URL.',
      }, { status: 500 });
    }

    const isAppsScript =
      webhookHost.includes('script.google.com') ||
      webhookHost.includes('script.googleusercontent.com');

    if (!isAppsScript) {
      return NextResponse.json({
        ok: false,
        error:
          'Google Sheets webhook URL must be a Google Apps Script Web App URL (script.google.com).',
      }, { status: 500 });
    }

    const spreadsheetResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobile, email, service, message }),
    });

    if (!spreadsheetResponse.ok) {
      const text = await spreadsheetResponse.text();
      throw new Error(`Webhook failed: ${spreadsheetResponse.status} ${text}`);
    }

    const result = await spreadsheetResponse.text();

    return NextResponse.json({ ok: true, message: 'Sent to Google Sheets', result });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
