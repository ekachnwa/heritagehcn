import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Accessibility,
  BedDouble,
  ChefHat,
  Ear,
  HeartPulse,
  Home,
  MessageCircle,
  ShieldCheck,
  Utensils,
} from "lucide-react";

import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";

type AidCategory = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  href: string;
};

const categories: AidCategory[] = [
  {
    title: "Bathroom Safety",
    description:
      "Equipment to improve safety and accessibility in the bathroom.",
    image: "/images/adaptive-aids/bathroom-safety.jpg",
    icon: ShieldCheck,
    href: "/adaptive-aids/bathroom-safety",
  },
  {
    title: "Mobility & Movement",
    description:
      "Aids to help with walking, transferring, and getting around.",
    image: "/images/adaptive-aids/mobility-movement.jpg",
    icon: Accessibility,
    href: "/adaptive-aids/mobility-movement",
  },
  {
    title: "Daily Living Aids",
    description:
      "Tools that make everyday tasks simpler and more manageable.",
    image: "/images/adaptive-aids/daily-living-aids.jpg",
    icon: Utensils,
    href: "/adaptive-aids/daily-living",
  },
  {
    title: "Bedroom Aids",
    description:
      "Products that support safe and comfortable rest and sleep.",
    image: "/images/adaptive-aids/bedroom-aids.jpg",
    icon: BedDouble,
    href: "/adaptive-aids/bedroom-aids",
  },
  {
    title: "Kitchen Aids",
    description:
      "Helpful devices for meal preparation and kitchen tasks.",
    image: "/images/adaptive-aids/kitchen-aids.jpg",
    icon: ChefHat,
    href: "/adaptive-aids/kitchen-aids",
  },
  {
    title: "Communication Aids",
    description:
      "Tools that support communication and connection.",
    image: "/images/adaptive-aids/communication-aids.jpg",
    icon: MessageCircle,
    href: "/adaptive-aids/communication-aids",
  },
  {
    title: "Sensory Support",
    description:
      "Aids for vision, hearing, and sensory support needs.",
    image: "/images/adaptive-aids/sensory-support.jpg",
    icon: Ear,
    href: "/adaptive-aids/sensory-support",
  },
  {
    title: "Orthotics & Supports",
    description:
      "Braces and supports that improve stability and function.",
    image: "/images/adaptive-aids/orthotics-supports.jpg",
    icon: HeartPulse,
    href: "/adaptive-aids/orthotics-supports",
  },
];

function AidCategoryCard({ category }: { category: AidCategory }) {
  const Icon = category.icon;

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_3px_15px_rgba(10,40,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(10,40,70,0.11)]">
      {/* Image */}
      <div className="relative h-[150px] overflow-hidden sm:h-[155px]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative px-5 pb-5 pt-0">
        {/* Floating icon */}
        <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#eef8ef] shadow-sm">
          <Icon
            className="h-6 w-6 text-[#176d2d]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-3 text-base font-bold leading-6 text-[#09275f]">
          {category.title}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#183052]">
          {category.description}
        </p>

        <Link
          href={category.href}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#176d2d] transition-colors hover:text-[#0f4f21] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176d2d] focus-visible:ring-offset-2"
        >
          View Products
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export default function AdaptiveAidCategories() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionTitle
          title="Explore Adaptive Aid Categories"
          align="center"
        />

        <div className="mx-auto mt-8 h-[3px] w-10 rounded-full bg-[#176d2d]" />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <AidCategoryCard
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}