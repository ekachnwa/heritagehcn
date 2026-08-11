"use client"
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

const benefits = [
  "Free Consultation",
  "Personalized Care Plans",
  "Licensed Healthcare Professionals",
  "Serving Families Across Texas",
];

export default function ServicesCTA() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-green-700 py-24">
      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-xl lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}

            <div>
              <Badge className="border-white/20 bg-white/15 text-white">
                Get Started Today
              </Badge>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Let's Build a Care Plan
                <br />
                That's Right for You
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
                Whether you're seeking home healthcare, skilled
                nursing, therapy services, or community support,
                our experienced team is here to guide you every
                step of the way.
              </p>

              <div className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-300" />

                    <span className="text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg"
                className="cursor-pointer"
                onClick={() => router.push("/consultation")}
                >
                  Schedule Consultation

                  <Calendar className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-green-700 cursor-pointer hover:bg-white hover:text-green-800"
                >
                  <Phone className="mr-2 h-5 w-5" />

                  (214) 991-0608
                </Button>
              </div>
            </div>

            {/* Right Card */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                <ShieldCheck className="h-8 w-8 text-green-700" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Why Families Choose Us
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Heritage Homecare Network Limited is committed to
                delivering compassionate, reliable, and
                person-centered care that helps individuals live
                independently with confidence.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Years of Experience
                  </span>

                  <span className="font-bold text-green-700">
                    15+
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Families Served
                  </span>

                  <span className="font-bold text-green-700">
                    500+
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Healthcare Services
                  </span>

                  <span className="font-bold text-green-700">
                    14+
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Communities Served
                  </span>

                  <span className="font-bold text-green-700">
                    20+
                  </span>
                </div>
              </div>

              <Button className="mt-10 w-full justify-center cursor-pointer"
              onClick={() => router.push("/contact")}
              >
                Contact Our Care Team

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}

          <div className="mt-14 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Compassion. Respect. Excellence.
                </h3>

                <p className="mt-2 text-green-100">
                  Delivering exceptional home healthcare services
                  that empower individuals and strengthen families.
                </p>
              </div>

              {/* <Button
                variant="secondary"
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 cursor-pointer"
                onClick={() => router.push("/services")}
              >
                Explore Our Programs

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}