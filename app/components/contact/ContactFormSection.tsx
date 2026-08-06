"use client";

import {
  Clock3,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Input } from "../../components/ui/Input";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "214-991-0608",
    description: "Mon – Fri: 8:00 AM – 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info../..heritagehomecare.com",
    description: "We aim to respond within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: (
      <>
        3780 Bloomfield Lane,
        <br />
        Frisco, TX 75033
      </>
    ),
    description: "By appointment only.",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: (
      <>
        Monday – Friday: 8:00 AM – 6:00 PM
        <br />
        Saturday – Sunday: Closed
      </>
    ),
    description: "",
  },
];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    // Connect your API/server action here.
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          {/* Contact Information */}
          <aside>
            <h2 className="text-2xl font-bold text-[#176d2d]">
              Get in Touch
            </h2>

            <div className="mt-5">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex gap-5 py-5 ${
                      index !== contactDetails.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef8ef]">
                      <Icon className="h-6 w-6 text-[#176d2d]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#09275f]">
                        {item.title}
                      </h3>

                      <div className="mt-1 text-base font-semibold leading-6 text-[#09275f]">
                        {item.value}
                      </div>

                      {item.description && (
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Immediate Assistance */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#eef8ef] to-[#f8fbf7] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#176d2d]">
                  <Headphones className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-[#176d2d]">
                    Need Immediate Assistance?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#183052]">
                    Our care team is ready to help you find the right
                    support for your loved one.
                  </p>
                </div>
              </div>

              <a
                href="tel:2149910608"
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-[#176d2d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#125923]"
              >
                Call Us Now
                <Phone className="h-4 w-4" />
                214-991-0608
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_35px_rgba(10,40,70,0.08)] sm:p-8 lg:p-9">
            <div>
              <h2 className="text-2xl font-bold text-[#176d2d] sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#183052] sm:text-base">
                Fill out the form below and a member of our team will
                get back to you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* Name */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Email / Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you../..example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="(214) 000-0000"
                  required
                />
              </div>

              {/* Referral */}
              <div>
                <label
                  htmlFor="howDidYouHear"
                  className="mb-2 block text-sm font-medium text-[#09275f]"
                >
                  How did you hear about us?
                </label>

                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#176d2d] focus:ring-2 focus:ring-[#176d2d]/15"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="google">Google</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Friend or Family</option>
                  <option value="healthcare-provider">
                    Healthcare Provider
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#09275f]"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#176d2d] focus:ring-2 focus:ring-[#176d2d]/15"
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#176d2d]" />

                <p className="text-xs leading-5 text-[#183052] sm:text-sm">
                  Your information is safe with us. We respect your
                  privacy and will never share your details.
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full justify-center gap-2 bg-[#176d2d] hover:bg-[#125923]"
              >
                {submitted ? "Message Sent" : "Send Message"}

                <Send className="h-4 w-4" />
              </Button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-800"
                >
                  Thank you! Your message has been received. Our team
                  will contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}