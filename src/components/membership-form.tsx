"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-data";

export function MembershipForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Membership application from ${fullName}`);
    const bodyLines = [
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Address: ${address || "—"}`,
      `Spouse / children: ${familyMembers || "—"}`,
      `Notes: ${notes || "—"}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="full-name" className="text-sm font-medium text-ink/80">
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink/80">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink/80">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="address" className="text-sm font-medium text-ink/80">
          Home Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="family-members" className="text-sm font-medium text-ink/80">
          Spouse / Children (names and ages)
        </label>
        <textarea
          id="family-members"
          rows={3}
          value={familyMembers}
          onChange={(e) => setFamilyMembers(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="notes" className="text-sm font-medium text-ink/80">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-dark"
      >
        Submit Application
      </button>
    </form>
  );
}
