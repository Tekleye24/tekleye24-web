import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { siteConfig } from "@/lib/site-data";

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100_000;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { amount, frequency } = body as { amount?: unknown; frequency?: unknown };

  const numericAmount = Number(amount);
  if (!Number.isFinite(numericAmount) || numericAmount < MIN_AMOUNT || numericAmount > MAX_AMOUNT) {
    return NextResponse.json(
      { error: `Enter an amount between $${MIN_AMOUNT} and $${MAX_AMOUNT.toLocaleString()}.` },
      { status: 400 },
    );
  }

  if (frequency !== "once" && frequency !== "monthly") {
    return NextResponse.json({ error: "Invalid giving frequency." }, { status: 400 });
  }

  let stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { error: "Online giving isn't configured yet. Please use Zelle or bank transfer for now." },
      { status: 503 },
    );
  }

  const origin = request.nextUrl.origin;
  const unitAmount = Math.round(numericAmount * 100);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: frequency === "monthly" ? "subscription" : "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name:
                frequency === "monthly"
                  ? `Monthly gift to ${siteConfig.name}`
                  : `Gift to ${siteConfig.name}`,
            },
            unit_amount: unitAmount,
            ...(frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/give/thank-you`,
      cancel_url: `${origin}/give`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 502 });
  }
}
