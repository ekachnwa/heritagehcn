"use client"
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

export default function CTA() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-800 to-slate-900 py-24 text-white">
      {/* Background Effects */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="border-white/20 bg-white/10 text-white">
            Get Started Today
          </Badge>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Compassionate Home Care Starts With a Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Whether you need skilled nursing, personal care, therapy,
            or support through Medicaid and HCS programs, our team is
            ready to help you find the right care solution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="min-w-[220px] bg-white text-green-800 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push("/consultation")}
            >
              <Calendar className="mr-2 h-5 w-5 " />
              Book a Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer min-w-[220px] border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 991-0608
            </Button>
          </div>

          <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-3">
            <div>
              <div className="text-2xl font-bold text-white">
                Free
              </div>
              <p className="mt-2 text-sm text-green-100">
                Initial Consultation
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-white">
                24/7
              </div>
              <p className="mt-2 text-sm text-green-100">
                Support Available
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-white">
                Same Day
              </div>
              <p className="mt-2 text-sm text-green-100">
                Response Time
              </p>
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-green-100">
            <span>Serving Dallas, Frisco, Plano, McKinney & surrounding areas</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}