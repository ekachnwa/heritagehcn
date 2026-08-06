"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, LockKeyhole } from "lucide-react";

import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Input } from "../../components/ui/Input";

type ConsultationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactMethod: string;
  bestTime: string;
  consultationFor: string;
  heardAboutUs: string;
  needs: string;
};

const initialFormData: ConsultationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  contactMethod: "",
  bestTime: "",
  consultationFor: "",
  heardAboutUs: "",
  needs: "",
};

const contactMethods = [
  "Phone",
  "Email",
  "Text Message",
  "Either Phone or Email",
];

const contactTimes = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 3:00 PM)",
  "Late Afternoon (3:00 PM – 6:00 PM)",
  "Any Time",
];

const referralSources = [
  "Google Search",
  "Social Media",
  "Friend or Family",
  "Healthcare Provider",
  "Insurance / Case Manager",
  "Community Organization",
  "Other",
];

export default function ConsultationForm() {
  const [formData, setFormData] =
    useState<ConsultationFormData>(initialFormData);

  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof ConsultationFormData,
    value: string,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this to your API route or server action.
    console.log("Consultation request:", formData);

    setSubmitted(true);
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-8">
          {/* Consultation Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_35px_rgba(10,40,70,0.07)] sm:p-8 lg:p-9">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef8ef]">
                  <CalendarCheck className="h-5 w-5 text-[#176d2d]" />
                </div>

                <h2 className="text-2xl font-bold text-[#176d2d] sm:text-3xl">
                  Consultation Request Form
                </h2>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#15264a] sm:text-base">
                Please fill out the form below and a member of our team
                will contact you to schedule your free consultation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* First / Last Name */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(event) =>
                    updateField("firstName", event.target.value)
                  }
                  placeholder="Enter your first name"
                  required
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(event) =>
                    updateField("lastName", event.target.value)
                  }
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Email / Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  placeholder="(214) 000-0000"
                  required
                />
              </div>

              {/* Preferred Contact Method */}
              <SelectField
                id="contactMethod"
                name="contactMethod"
                label="Preferred Method of Contact"
                value={formData.contactMethod}
                onChange={(value) =>
                  updateField("contactMethod", value)
                }
                options={contactMethods}
                required
              />

              {/* Best Time */}
              <SelectField
                id="bestTime"
                name="bestTime"
                label="Best Time to Contact You"
                value={formData.bestTime}
                onChange={(value) => updateField("bestTime", value)}
                options={contactTimes}
                required
              />

              {/* Consultation For */}
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-[#09275f]">
                  Who is this consultation for?
                  <span className="ml-1 text-red-500">*</span>
                </legend>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["myself", "Myself"],
                    ["spouse", "My Spouse"],
                    ["parent", "My Parent"],
                    ["loved-one", "Other Loved One"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-2 text-sm text-[#183052]"
                    >
                      <input
                        type="radio"
                        name="consultationFor"
                        value={value}
                        checked={
                          formData.consultationFor === value
                        }
                        onChange={(event) =>
                          updateField(
                            "consultationFor",
                            event.target.value,
                          )
                        }
                        required
                        className="h-4 w-4 border-slate-300 text-[#176d2d] accent-[#176d2d] focus:ring-[#176d2d]"
                      />

                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Referral */}
              <SelectField
                id="heardAboutUs"
                name="heardAboutUs"
                label="How did you hear about us?"
                value={formData.heardAboutUs}
                onChange={(value) =>
                  updateField("heardAboutUs", value)
                }
                options={referralSources}
              />

              {/* Needs */}
              <div>
                <label
                  htmlFor="needs"
                  className="mb-2 block text-sm font-medium text-[#09275f]"
                >
                  Tell us about your needs
                </label>

                <textarea
                  id="needs"
                  name="needs"
                  rows={4}
                  value={formData.needs}
                  onChange={(event) =>
                    updateField("needs", event.target.value)
                  }
                  placeholder="Please share any details that will help us understand how we can help."
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#176d2d] focus:ring-2 focus:ring-[#176d2d]/15"
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <LockKeyhole
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#176d2d]"
                  aria-hidden="true"
                />

                <p className="text-xs leading-5 text-[#183052] sm:text-sm">
                  Your information is safe with us. We respect your
                  privacy and will never share your details.
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full justify-center bg-[#176d2d] hover:bg-[#125923]"
              >
                {submitted ? "Request Submitted" : "Submit Request"}

                <CalendarCheck className="ml-2 h-4 w-4" />
              </Button>

              {/* Success Message */}
              {submitted && (
                <div
                  role="status"
                  className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-800"
                >
                  Thank you! Your consultation request has been
                  received. A member of our team will contact you
                  soon.
                </div>
              )}
            </form>
          </div>

          {/* Desktop sidebar placeholder */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable Select Field                                                       */
/* -------------------------------------------------------------------------- */

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
};

function SelectField({
  id,
  name,
  label,
  value,
  options,
  required = false,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-[#09275f]"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="h-12 w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#176d2d] focus:ring-2 focus:ring-[#176d2d]/15"
      >
        <option value="" disabled>
          Please select
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}