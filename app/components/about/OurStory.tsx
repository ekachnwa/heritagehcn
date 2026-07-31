import Image from "next/image";

import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/our-story.png"
                alt="Caregiver assisting a client during a learning activity"
                width={700}
                height={650}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Experience Card */}

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-green-700 px-6 py-5 text-white shadow-lg">
              <h3 className="text-3xl font-bold">
                500+
              </h3>

              <p className="mt-1 text-sm text-green-100">
                Individuals Supported
              </p>
            </div>
          </div>

          {/* Right Content */}

          <div>
            <Badge>Our Story</Badge>

            <div className="mt-4">
              <SectionTitle
                align="left"
                title="We Care. We Support. We Empower."
                subtitle="Our mission is to improve lives by providing compassionate, person-centered healthcare services that promote dignity, independence, and inclusion."
              />
            </div>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Heritage Homecare Network Limited was founded with
                the vision of making quality home healthcare
                accessible to individuals with developmental and
                intellectual disabilities across Texas.
              </p>

              <p>
                Through innovative care plans, experienced
                healthcare professionals, and strong partnerships
                with families, we empower individuals to achieve
                greater independence while living safely and
                comfortably at home.
              </p>

              <p>
                Every service we provide is guided by compassion,
                respect, and a commitment to improving the quality
                of life for every person we serve.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Values */}

        <div className="mt-24 grid gap-8 rounded-3xl bg-slate-50 p-10 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              To provide exceptional home and community-based
              healthcare services that empower individuals to live
              independently while receiving compassionate,
              high-quality support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              To become Texas' leading provider of innovative,
              person-centered home healthcare that transforms
              lives and strengthens communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Our Values
            </h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Compassion</li>
              <li>• Integrity</li>
              <li>• Respect</li>
              <li>• Excellence</li>
              <li>• Inclusion</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
);
}