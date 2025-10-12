"use client";
import React, { useState} from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="topbar text-center bg-gray-100 py-1">
        <p className="text-sm text-gray-600">Free shipping on orders over 1500</p>
      </div>
      <div className="header-top flex items-center justify-between py-4 px-6">
        <div className="mobile-nav md:hidden mt-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          
        </div>
        {/* Mobile Menu Overlay */}
      {isOpen && (
       <>
    

            <div className="mobile-menu absolute top-16 left-0 w-full bg-white shadow-md z-50">
               <div 
              onClick={() => setIsOpen(false)}
              className="mb-8"
            >
              <X size={24} />
            </div>
              <MobileMenu />
            </div>
 
           

            </>
          
      )}
      <a href="/" className="logo">
        <Image
          className="dark:invert"
          src="/fablo-fashion-logo.png"
          alt="Fablo Fashion Logo"
          width={337}
          height={105}
          priority
        />
      </a>
      <div className="cart-button-container">
        <button
          onClick={() => {}}
          className="relative px-3 py-1 rounded flex items-center"
          aria-label="Toggle cart"
        >
          <Image
            src="/cart.svg"
            alt="Cart"
            width={24}
            height={24}
            priority
          />
        
        </button>
      </div>
      </div>
      <div className="header-bottom hidden md:flex w-full">
      <Navigation />
      </div>
    </header>
  );
}
