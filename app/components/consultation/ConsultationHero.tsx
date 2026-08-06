import Image from "next/image";

import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export default function ConsultationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
  
      <Container>
          <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
          {/* Content */}
          <div>
                  <Badge>Book a Consultation</Badge>
      
                  <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                    Personalized Care Starts <br />
                                 
                  </h1>
                  <span className="text-green-700 font-semibold">with a Conversation. </span>
      
                  <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />
      
                  <p className="mt-8 text-lg leading-8 text-slate-600">
                    Schedule a free, no-obligation consultation with our care
                    team. We&apos;ll talk with you about your needs, answer your
                    questions, and help you explore the right care options for
                    your loved one.
                  </p>
      
                </div>
      
                {/* Image */}
      
                <div className="relative">
                  {/* Main Image */}
      
                  <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                    <Image
                      src="/images/consultation-hero.png"
                      alt="Caregiver speaking with an older adult during a consultation"
                      width={760}
                      height={760}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Decorative Circle */}
      
                  <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full border-[12px] border-green-600 opacity-30" />
                </div>
              </div>
            </Container>

      {/* Bottom Curve Decoration */}
      
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 120"
        fill="currentColor"
      >
        <path d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,74.7C1120,85,1280,107,1360,117.3L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
      </svg>
    </section>
  );
        
        
  
        
      
}