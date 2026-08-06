"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Eligibility", href: "/eligibility" },
  // { name: "Service Areas", href: "/service-areas" },
  // { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Skilled Nursing", href: "/services" },
  { name: "Residential Services", href: "/services" },
  { name: "In-Home Services", href: "/services" },
  { name: "Respite Care", href: "/services" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <div className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
            <img src="/logo.png" alt="Heritage Homecare Logo"  />
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
            // item.name === "Services" ? (
            //   <div key={item.name} className="group relative">
            //     <div className="flex items-center gap-1">
            //       <Link
            //         href={item.href}
            //         className="text-sm font-medium text-slate-700 transition hover:text-green-700"
            //       >
            //         {item.name}
            //       </Link>
            //       <button
            //         type="button"
            //         aria-label="Toggle Services menu"
            //         className="text-slate-700 transition hover:text-green-700"
            //       >
            //         <ChevronDown size={16} />
            //       </button>
            //     </div>

            //     <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            //       <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
            //         {serviceLinks.map((service) => (
            //           <Link
            //             key={service.name}
            //             href={service.href}
            //             className="block rounded-md px-4 py-2.5 text-sm text-slate-700 transition hover:bg-green-50 hover:text-green-700"
            //           >
            //             {service.name}
            //           </Link>
            //         ))}
            //       </div>
            //     </div>
            //   </div>
            // ) : 
            (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-green-700"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:block">
          <button 
          className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-medium text-white transition hover:bg-green-800 cursor-pointer"
          onClick={() => router.push("/consultation")}
          >
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
              item.name === "Services" ? (
                <div key={item.name}>
                  <div className="flex items-center rounded-lg hover:bg-gray-100">
                    <Link
                      href={item.href}
                      className="flex-1 px-4 py-3"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Services menu"
                      aria-expanded={servicesOpen}
                      className="px-4 py-3"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="ml-4 border-l border-slate-200 pl-3">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-100 hover:text-green-700"
                          onClick={() => setOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}

            <button 
              className="mt-4 w-full rounded-lg bg-green-700 py-3 text-white"
              onClick={() => router.push("/consultation")}
            >
              Book Consultation
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}