import {
  Heart,
  Eye,
  Target,
  ShieldCheck,
  HandHeart,
  Sparkles,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We care for every individual with kindness, empathy, and dignity.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We are honest, transparent, and accountable in everything we do.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    description:
      "We celebrate individuality and value every person's unique journey.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We continually improve our services to deliver exceptional care.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <Badge>Mission & Vision</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Driven by Purpose. Inspired by People."
              subtitle="Everything we do is guided by our commitment to compassionate care, meaningful relationships, and empowering individuals to live their best lives."
            />
          </div>
        </div>

        {/* Mission & Vision */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}

          <div className="rounded-3xl bg-gradient-to-br from-green-700 to-emerald-600 p-10 text-white shadow-xl">
            <div className="inline-flex rounded-2xl bg-white/15 p-4">
              <Target className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              To provide compassionate, person-centered home and
              community-based healthcare services that empower
              individuals to achieve independence, improve their
              quality of life, and thrive within their homes and
              communities.
            </p>

            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="italic text-green-50">
                "Delivering care with compassion, dignity, and
                excellence every single day."
              </p>
            </div>
          </div>

          {/* Vision */}

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-10 shadow-sm">
            <div className="inline-flex rounded-2xl bg-green-100 p-4">
              <Eye className="h-8 w-8 text-green-700" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Our Vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To become the most trusted provider of innovative,
              compassionate home healthcare services in Texas,
              helping individuals and families build healthier,
              happier, and more independent futures.
            </p>

            <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6">
              <p className="font-medium text-green-700">
                Building stronger communities through exceptional
                care and lasting relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}

        <div className="mt-24">
          <SectionTitle
            title="Our Core Values"
            subtitle="These principles guide every interaction, every decision, and every service we provide."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                    <Icon className="h-8 w-8 text-green-700" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote Banner */}

        <div className="mt-24 rounded-3xl bg-slate-900 px-8 py-14 text-center text-white">
          <Heart className="mx-auto h-12 w-12 text-green-400" />

          <h3 className="mt-6 text-3xl font-bold">
            Caring Beyond Healthcare
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We believe every individual deserves compassionate care,
            meaningful relationships, and the opportunity to live
            independently with confidence. Our mission extends beyond
            providing services—we strive to make a lasting difference
            in the lives of the people and families we serve.
          </p>
        </div>
      </Container>
    </section>
  );
}