import Image from "next/image";

import { Container } from "../../components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#eef8ff] via-white to-[#f8fbf9]">
      <Container>
        <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-20 py-16 lg:py-20">
            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#09275f] sm:text-6xl lg:text-[64px]">
              Contact Us
            </h1>

            <div className="mt-5 max-w-xl">
              <h2 className="text-2xl font-bold leading-tight text-[#176d2d] sm:text-3xl">
                We’re Here to Help.
                <br />
                Let’s Start the Conversation.
              </h2>

              <div className="mt-5 h-[3px] w-10 bg-[#176d2d]" />

              <p className="mt-5 max-w-lg text-base leading-7 text-[#15264a] sm:text-lg">
                Have a question about our services or want to learn how we can
                support your loved one? Reach out to our compassionate team
                today. We’re ready to listen and help.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[430px] lg:absolute lg:-right-[8%] lg:top-0 lg:h-full lg:w-[62%]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/contact-hero.png"
                alt="Caregiver supporting an elderly woman at home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center"
              />

              {/* Soft fade into content */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#eef8ff] via-transparent to-transparent lg:w-1/2" />

              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
            </div>

            
          </div>
        </div>
      </Container>

      {/* Mobile image separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
}