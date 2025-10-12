"use client";
import React from "react";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="footer bg-gray-100 w-full">
      <div className="footer-links--container flex gap-4 px-6 py-4 w-full">
        <ul className="p-4">
          <li>
            <a href="/about" className="text-sm text-gray-500 hover:underline">About Us</a>
          </li>
          <li>
            <a href="/contact" className="text-sm text-gray-500 hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright--container flex gap-4 px-6 py-4 w-full">
      <div className="">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Fablo Fashion. All rights reserved.</p>
      </div>
      <div className="">
        <a href="/privacy-policy" className="text-sm text-gray-500">Privacy Policy</a>
      </div>
</div>

    </footer>
  );
}
