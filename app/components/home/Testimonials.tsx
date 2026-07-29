import { Star, Quote } from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Card, CardContent } from "../../components/ui/Card";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Daughter of Client",
    content:
      "Heritage Homecare treated my mother with kindness, patience, and professionalism. The caregivers became like family, and we finally had peace of mind knowing she was in good hands.",
  },
  {
    name: "James Richardson",
    role: "Family Member",
    content:
      "The nursing and therapy services exceeded our expectations. Communication was excellent, and every member of the team showed genuine compassion and respect.",
  },
  {
    name: "Angela Carter",
    role: "Client",
    content:
      "Because of the support I received, I was able to remain in my home and regain my confidence. I am truly grateful for the care and encouragement I received every day.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <Badge>What Families Say</Badge>

          <div className="mt-4">
            <SectionTitle
              title="Trusted by Families Across North Texas"
              subtitle="The greatest measure of our care is the confidence and peace of mind shared by the families we serve."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="h-full border-0 bg-slate-50 shadow-sm hover:shadow-xl"
            >
              <CardContent>
                <div className="flex h-full flex-col p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current"
                        />
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-green-700/20" />
                  </div>

                  <p className="flex-1 leading-8 text-slate-600">
                    “{testimonial.content}”
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">
              500+
            </div>
            <p className="mt-2 text-slate-300">
              Families Served
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">
              5.0★
            </div>
            <p className="mt-2 text-slate-300">
              Average Satisfaction
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">
              15+
            </div>
            <p className="mt-2 text-slate-300">
              Years of Experience
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}