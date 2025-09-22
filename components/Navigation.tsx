"use client";
import React from "react";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/new", label: "New" },
  { href: "/sale", label: "Sale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="w-full border-t border-b mt-3 mb-6">
      <ul className="flex gap-4 py-3 text-sm">
        {navItems.map((n) => (
          <li key={n.href}>
            <a href={n.href} className="text-gray-700 hover:underline">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
