"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "the website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink/80">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
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
        <label htmlFor="message" className="text-sm font-medium text-ink/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-gold/40 bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy"
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-dark"
      >
        Send Message
      </button>
    </form>
  );
}
