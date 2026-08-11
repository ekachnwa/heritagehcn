import { Metadata } from "next"; 
import SpeechTherapyHero from "@/app/components/services/speech-therapy/SpeechTherapyHero";
import SpeechTherapyCTA from "@/app/components/services/speech-therapy/SpeechTherapyCTA";
import SpeechTherapyApproach from "@/app/components/services/speech-therapy/SpeechTherapyApproach";
import SpeechTherapyBenefits from "@/app/components/services/speech-therapy/SpeechTherapyBenefits";
import SpeechTherapyAudience from "@/app/components/services/speech-therapy/SpeechTherapyAudience";

export const metadata: Metadata = {
  title: "Our Services | Heritage Homecare Network Limited",
  description:
    "Explore Heritage Homecare Network Limited's comprehensive Home & Community-Based Services, including skilled nursing, therapy, respite care, residential support, adaptive aids, and personalized care across Texas.",
  keywords: [
    "Home Healthcare",
    "Home Care Services",
    "HCS",
    "Texas Home Living",
    "Skilled Nursing",
    "Respite Care",
    "Speech Therapy",
    "Residential Services",
    "Home & Community-Based Services",
    "Heritage Homecare",
  ],
};

export default function SpeechTherapyPage() {
  return (
    <>
      <SpeechTherapyHero />

        <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
               <div className="grid gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-[#f5faf6] lg:grid-cols-2">
                 <SpeechTherapyAudience />
                 <SpeechTherapyBenefits />
               </div>
             </div>
           </section>

      <SpeechTherapyApproach />
      <SpeechTherapyCTA /> 
    </>
  );
}







// export default function SpeechTherapyPage() {
//   return (
//     <main className="overflow-x-hidden">
//       <SpeechTherapyHero />

//       <section className="bg-white py-10 sm:py-14 lg:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//           <div className="grid gap-7 lg:grid-cols-[1fr_290px]">
//             <SpeechTherapyServices />
//             <SpeechTherapyHelp />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//           <div className="grid gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-[#f5faf6] lg:grid-cols-2">
//             <SpeechTherapyAudience />
//             <SpeechTherapyBenefits />
//           </div>
//         </div>
//       </section>

//       <SpeechTherapyApproach />

//       <SpeechTherapyCTA />
//     </main>
//   );
// }