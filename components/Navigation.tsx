"use client";
import React from "react";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/new", label: "New" },
  { href: "/sale", label: "Sale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

// create another nav item { href: "/login", label: "Login" },  { href: "/register", label: "Register" },
// separate ul li for auth links and style them to the right side of the nav bar

const authItems: NavItem[] = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" }
];

export default function Navigation() {
  return (
    <nav className="w-full border-t border-b mt-3 mb-6 flex">
      <ul className="py-3 text-sm flex gap-4">
        {navItems.map((n) => (
          <li key={n.href}>
            <a href={n.href} className="text-gray-700 hover:underline">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="py-3 text-sm ml-auto flex gap-4">
        {authItems.map((n) => (
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
