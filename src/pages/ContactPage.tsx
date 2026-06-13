import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    const scriptUrl = import.meta.env.VITE_CONTACT_FORM_SHEETS_URL;

    if (!scriptUrl) {
      setStatus("error");
      setErrorMessage(
        "Google Sheets Web App URL is not configured. Please define VITE_CONTACT_FORM_SHEETS_URL in your .env file."
      );
      return;
    }

    try {
      // Using 'no-cors' mode to avoid browser CORS issues with Google Apps Script redirect.
      // Since it's 'no-cors', the response status will be 0 and opaque, but Google Sheets will successfully receive and store the data.
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please check your internet connection and try again.");
    }
  };

  return (
    <main className="pt-20">
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div
            className="
            mx-auto
            max-w-6xl
            rounded-[40px]
            border
            border-white/20
            bg-white/70
            p-10
            shadow-2xl
            backdrop-blur-xl
          "
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h1 className="text-5xl font-bold text-slate-800">
                  Contact Us
                </h1>

                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                  Let's discuss your learning journey. Fill out the form, and your details will be saved directly to our contact sheets for our team to reach out to you.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <span className="font-semibold text-blue-600">Email:</span>
                    <span>info@mikadosolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <span className="font-semibold text-blue-600">Website:</span>
                    <span>www.mikadosolutions.com</span>
                  </div>
                </div>
              </div>

              <div>
                {status === "success" && (
                  <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 animate-fadeIn">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">Thank you for contacting us. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus("idle")} 
                      className="mt-3 text-xs font-semibold text-emerald-600 hover:text-emerald-800 underline"
                    >
                      Send another message
                    </button>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 rounded-xl bg-rose-50 border border-rose-200 p-4 text-rose-800 animate-fadeIn">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm mt-1">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      disabled={status === "submitting"}
                      className={`w-full rounded-xl border p-4 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.name ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      disabled={status === "submitting"}
                      className={`w-full rounded-xl border p-4 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.email ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      disabled={status === "submitting"}
                      className={`w-full rounded-xl border p-4 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.phone ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Message"
                      disabled={status === "submitting"}
                      className={`w-full rounded-xl border p-4 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.message ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`
                    w-full
                    rounded-xl
                    bg-blue-600
                    px-8
                    py-4
                    text-white
                    font-semibold
                    hover:bg-blue-700
                    active:bg-blue-800
                    transition-colors
                    cursor-pointer
                    disabled:bg-blue-400
                    disabled:cursor-not-allowed
                    flex
                    items-center
                    justify-center
                    space-x-2
                  `}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
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