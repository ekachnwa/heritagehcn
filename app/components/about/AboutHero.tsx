import Image from "next/image";
import { Container } from "../../components/ui/Container";
import { Badge } from "../../components/ui/Badge";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Decorative Blur */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
          {/* Content */}
          <div>
            <Badge>About Us</Badge>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Compassionate Care.              
            </h1>
            <span className="text-green-700 font-semibold">Trusted Professionals. </span>

            <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Heritage Homecare Network Limited is committed to
              providing exceptional Home & Community-Based Services
              and Texas Home Living programs that empower
              individuals to live independently with dignity and
              confidence.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our experienced caregivers and healthcare
              professionals deliver compassionate support tailored
              to each person's unique needs, promoting
              independence and improving quality of life in every
              community we serve.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  15+
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  20+
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Communities Served
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  500+
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Families Supported
                </p>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className="relative">
            {/* Main Image */}

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/about-hero.png"
                alt="Caregiver assisting an elderly gentleman"
                width={760}
                height={760}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Experience Badge */}

            <div className="absolute -right-6 top-8 rounded-2xl bg-green-700 px-6 py-5 text-center text-white shadow-xl">
              <h2 className="text-4xl font-bold">
                15+
              </h2>

              <p className="mt-1 text-sm">
                Years of Care
              </p>
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