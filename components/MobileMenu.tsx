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

export default function MobileMenu() {
  return (
    <nav className="">
      <ul className="">
        {navItems.map((n) => (
          <li key={n.href} className="my-2 p-2">
            <a href={n.href} className="text-gray-700 hover:underline">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="">
        {authItems.map((n) => (
          <li key={n.href} className="my-2 p-2">
            <a href={n.href} className="text-gray-700 hover:underline">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
