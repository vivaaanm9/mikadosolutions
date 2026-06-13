import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<
      string,
      string
    > = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Message is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    const scriptUrl =
      import.meta.env
        .VITE_CONTACT_FORM_SHEETS_URL;

    if (!scriptUrl) {
      setStatus("error");

      setErrorMessage(
        "Google Sheets URL is not configured."
      );

      return;
    }

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          formData
        ),
      });

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        "Unable to send message. Please try again."
      );
    }
  };

  return (
    <main className="pt-20">
      <section className="hero-bg py-24">
        <div className="container mx-auto px-6">
          <div
            className="
            mx-auto
            max-w-7xl
            rounded-[40px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-[0_20px_60px_rgba(91,75,154,0.15)]
            md:p-12
          "
          >
            <div className="grid gap-16 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div>
                <span
                  className="
                  rounded-full
                  bg-[#F3F1FC]
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#5B4B9A]
                "
                >
                  Get In Touch
                </span>

                <h1
                  className="
                  mt-6
                  text-5xl
                  font-black
                  md:text-6xl
                "
                >
                  <span className="gradient-text">
                    Contact Us
                  </span>
                </h1>

                <p
                  className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
                >
                  Ready to start your
                  career journey with
                  Mikado Solutions?
                  Reach out and our
                  team will guide you.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h4 className="font-semibold text-[#5B4B9A]">
                      Email
                    </h4>

                    <p className="mt-1 text-slate-600">
                      info@mikadosolutions.com
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h4 className="font-semibold text-[#5B4B9A]">
                      Phone
                    </h4>

                    <p className="mt-1 text-slate-600">
                      +91 9321253357 
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h4 className="font-semibold text-[#5B4B9A]">
                      Location
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Mumbai,
                      Maharashtra,
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div>
                {status === "success" && (
                  <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                    Message submitted
                    successfully.
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                    {errorMessage}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Full Name"
                      className="w-full rounded-2xl border border-slate-200 p-4 focus:border-[#5B4B9A] focus:outline-none"
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-slate-200 p-4 focus:border-[#5B4B9A] focus:outline-none"
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={
                        formData.phone
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Phone Number"
                      className="w-full rounded-2xl border border-slate-200 p-4 focus:border-[#5B4B9A] focus:outline-none"
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      name="message"
                      value={
                        formData.message
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Tell us about your goals..."
                      className="w-full rounded-2xl border border-slate-200 p-4 focus:border-[#5B4B9A] focus:outline-none"
                    />

                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={
                      status ===
                      "submitting"
                    }
                    className="
                    w-full
                    rounded-2xl
                    bg-[#5B4B9A]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#46387C]
                    disabled:opacity-50
                  "
                  >
                    {status ===
                    "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}