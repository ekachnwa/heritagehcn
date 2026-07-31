import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Phone,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

const benefits = [
  "Free Initial Consultation",
  "Licensed Healthcare Professionals",
  "Personalized Care Plans",
  "Serving Communities Across Texas",
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-24 text-white">
      {/* Decorative Background */}

      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur-lg lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}

            <div>
              <Badge className="border-white/20 bg-white/20 text-white">
                Let's Talk
              </Badge>

              <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                Ready to Experience
                <br />
                Compassionate Home Care?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
                Whether you're exploring care options for yourself or
                a loved one, our experienced team is here to answer
                your questions and help you find the right support.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold">
                Schedule Your Consultation
              </h3>

              <p className="mt-3 text-slate-600">
                Speak with one of our care coordinators today and
                learn how we can support you or your loved one.
              </p>

              <div className="mt-8 space-y-4">
                <Button
                  size="lg"
                  className="w-full justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Consultation
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center gap-2"
                >
                  <Phone size={20} />
                  Call (214) 991-0608
                </Button>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-green-700">
                  Office Hours
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}

          <div className="mt-16 border-t border-white/20 pt-10">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">
                  Caring for Individuals. Supporting Families.
                </h3>

                <p className="mt-2 text-green-100">
                  Compassionate healthcare designed around your
                  unique needs.
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white text-green-700 hover:bg-green-50"
              >
                Contact Our Team

                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}