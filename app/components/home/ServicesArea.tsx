import {
  CheckCircle2,
  MapPin,
  Navigation,
} from "lucide-react";

import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

const areas = [
  "Dallas",
  "Plano",
  "Frisco",
  "McKinney",
  "Allen",
  "Richardson",
  "Garland",
  "Irving",
  "Carrollton",
  "Denton",
  "Lewisville",
  "Mesquite",
];

export default function ServiceAreas() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <Badge>Service Areas</Badge>

            <div className="mt-4">
              <SectionTitle
                align="left"
                title="Proudly Serving Families Throughout all Texas counties"
                subtitle="Heritage Homecare Network Limited provides compassionate home healthcare services across multiple cities and surrounding communities."
              />
            </div>

            <p className="mt-8 leading-8 text-slate-600">
              Whether you're seeking skilled nursing, personal
              assistance, therapy, or community support services,
              our experienced caregivers are available throughout
              the Dallas–Fort Worth Metroplex.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {areas.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-700" />

                  <span className="font-medium text-slate-700">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            {/* <Button className="mt-10" size="lg">
              Check Your Eligibility
            </Button> */}
          </div>

          {/* Right */}

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 to-green-500 p-12 text-white shadow-2xl">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-14 w-14" />
              </div>

              <h3 className="mt-8 text-center text-3xl font-bold">
                We Come To You
              </h3>

              <p className="mt-5 text-center leading-8 text-green-100">
                Our dedicated healthcare professionals provide
                compassionate in-home care wherever you are within
                our service region.
              </p>

              <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <Navigation className="h-8 w-8" />

                  <div>
                    <h4 className="font-semibold">
                      Serving Multiple Counties
                    </h4>

                    <p className="text-sm text-green-100">
                      Dallas • Collin • Denton • Tarrant &
                      surrounding communities
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white px-8 py-6 text-center text-green-700">
                <h4 className="text-5xl font-bold">
                  15+
                </h4>

                <p className="mt-2 font-medium">
                  Cities Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}