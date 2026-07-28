"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Eligibility", href: "#" },
  { name: "Service Areas", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={15} />
              <span>(214) 991-0608</span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <MapPin size={15} />
              <span>3780 Bloomfield Lane, Frisco, TX</span>
            </div>
          </div>

          <div className="hidden md:block">
            Compassionate Home Care
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-bold text-white">
            HH
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Heritage Homecare
            </h1>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Network Limited
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-medium text-white transition hover:bg-green-800">
            <Calendar size={18} />
            Book Consultation
          </button>
        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <nav className="border-t bg-white lg:hidden">
          <div className="space-y-1 px-6 py-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-4 w-full rounded-lg bg-green-700 py-3 text-white">
              Book Consultation
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}