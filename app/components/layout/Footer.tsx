import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Adaptive Aids", href: "/services/adaptive-aids" },
  { name: "Critical Care Nursing", href: "/services/critical-care-nursing" },
  { name: "Residential Services", href: "/services/residential-services" },
  { name: "Speech Therapy", href: "/services/speech-therapy" },
  { name: "Dietary Services", href: "/services/dietary-services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}

        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full text-xl font-bold text-white">
              <img src="/logo.png" alt="Heritage Homecare Logo" className="h-10 w-10" />
            </div>

            <div>
              <h2 className="font-bold text-white">
                Heritage Homecare
              </h2>

              <p className="text-sm">
                Network Limited
              </p>
            </div>
          </div>

          <p className="leading-7 text-gray-400">
            Compassionate, person-centered home care services
            dedicated to helping individuals live
            independently with dignity.
          </p>

          <div className="mt-6 flex gap-4">
            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedin className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-green-500" />
              <span>(214) 991-0608</span>
            </div>

            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-green-500" />
              <span>info@heritagehcn.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-green-500" />
              <span>
                3780 Bloomfield Lane
                <br />
                Frisco, TX
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Heritage Homecare
            Network Limited. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}