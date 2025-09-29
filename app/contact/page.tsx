"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Page/PageHeader";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!name.trim() || !validateEmail(email) || !message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // No backend in this boilerplate — simulate sending
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
         <PageHeader logoSrc="/fablo-fashion.png" altText="Fablo Fashion Logo" />
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">Have questions or want to work with us? Send a message below.</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={6}
            placeholder="How can we help?"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </div>

        {status === "sent" && <p className="text-green-600">Thanks — your message was sent (simulated).</p>}
        {status === "error" && <p className="text-red-600">Please complete all fields with a valid email.</p>}
      </form>
    </main>
  );
}
