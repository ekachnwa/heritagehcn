"use client"
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

const benefits = [
  "Personalized care plans",
  "Compassionate, person-centered support",
  "Experienced care professionals",
];

export default function ContactCTA() {
  const route = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-green-700 py-16 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div
        className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute right-[15%] top-12 hidden h-24 w-24 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-xl px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Content */}
            <div>
              <Badge className="border-white/20 bg-white/10 text-white">
                Ready to Get Started?
              </Badge>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s Talk About How We Can
                <span className="text-[#72b97d]"> Help.</span>
              </h2>

              <div
                className="mt-5 h-[3px] w-12 rounded-full bg-[#72b97d]"
                aria-hidden="true"
              />

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Whether you&apos;re looking for support for yourself or a
                loved one, our team is here to answer your questions and
                help you take the next step toward compassionate,
                personalized care.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-blue-50"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#72b97d]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="w-full lg:w-[310px]">
              <div className="rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8ef]">
                    <CalendarCheck className="h-6 w-6 text-[#176d2d]" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Take the next step
                    </p>

                    <h3 className="font-bold text-[#09275f]">
                      We&apos;re Here for You
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    size="lg"
                    className="w-full justify-center gap-2 bg-[#176d2d] hover:bg-[#125923] cursor-pointer"
                    onClick={() => route.push("/consltation")}
                  >
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <a
                    href="tel:2149910608"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#176d2d] px-4 text-sm font-semibold text-[#176d2d] transition-colors hover:bg-[#eef8ef]"
                  >
                    <Phone className="h-4 w-4" />
                    Call 214-991-0608
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-sm text-blue-100">
                Compassionate care starts with a conversation.
              </p>

              <p className="text-sm font-medium text-[#72b97d]">
                Heritage Homecare Network Limited
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}