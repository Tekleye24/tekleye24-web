"use client";

import { useState, type FormEvent } from "react";

const SUGGESTED_AMOUNTS = [25, 50, 100, 250];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveAmount = customAmount ? Number(customAmount) : amount;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!effectiveAmount || effectiveAmount <= 0) {
      setError("Enter an amount to give.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: effectiveAmount, frequency }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gold/30 bg-white p-6 sm:p-8">
      <div className="flex rounded-full bg-cream p-1">
        {(["once", "monthly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFrequency(option)}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
              frequency === option ? "bg-navy text-cream" : "text-ink/60"
            }`}
          >
            {option === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        {SUGGESTED_AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => {
              setAmount(value);
              setCustomAmount("");
            }}
            className={`rounded-lg border py-2.5 text-sm font-semibold transition-colors ${
              amount === value && !customAmount
                ? "border-navy bg-navy text-cream"
                : "border-gold/40 text-navy-dark hover:border-navy"
            }`}
          >
            ${value}
          </button>
        ))}
      </div>

      <div className="mt-3">
        <label htmlFor="custom-amount" className="text-sm font-medium text-ink/80">
          Or enter a custom amount
        </label>
        <div className="mt-1.5 flex items-center rounded-lg border border-gold/40 bg-white px-3.5 focus-within:border-navy">
          <span className="text-ink/50">$</span>
          <input
            id="custom-amount"
            type="number"
            min={1}
            step="1"
            placeholder="0"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full bg-transparent py-2.5 pl-1.5 text-sm text-ink outline-none"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-dark">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {isSubmitting
          ? "Redirecting…"
          : `Give $${effectiveAmount || 0}${frequency === "monthly" ? " / month" : ""}`}
      </button>

      <p className="mt-3 text-center text-xs text-ink/50">
        Securely processed by Stripe. Apple Pay, Google Pay, and cards accepted.
      </p>
    </form>
  );
}
