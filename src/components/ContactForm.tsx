// src/components/ContactForm.tsx
import React, { useState } from "react";

interface FormData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  country: string;
  message: string;
  agree: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    country: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.currentTarget;
    const name = target.name;

    // If it's an input checkbox — narrow and use .checked
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    // Otherwise use .value (works for input[text/email/tel], select, textarea)
    setFormData((prev) => ({ ...prev, [name]: target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: validate / send data to backend
    console.log("Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div>
        <label className="block font-semibold mb-2">Inquiry Type*</label>
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
        >
          <option value="">Select a value</option>
          <option value="client">Current Client</option>
          <option value="employee">Current Employee</option>
          <option value="it-hr">Current Employee Requests (IT & HR)</option>
          <option value="former">Former Employee</option>
          <option value="investor">Investor</option>
          <option value="job-seeker">Job Seeker</option>
          <option value="media">Media</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">First Name*</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Last Name*</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">Email*</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Phone*</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
          />
        </div>
      </div>

      {/* other fields... */}
      <div>
        <label className="block font-semibold mb-2">How can we help you?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full border border-gray-600 bg-white p-3 rounded-lg text-black"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="agree"
          name="agree"
          type="checkbox"
          checked={formData.agree}
          onChange={handleChange}
        />
        <label htmlFor="agree" className="text-sm">
          I agree to the use or processing of my personal information by
          Yamaha for the purpose of fulfilling this request and in accordance
          with Yamaha’s Privacy Statement
        </label>
      </div>

      <button
        type="submit"
        disabled={!formData.agree}
        className={`w-full py-3 rounded-lg font-medium transition ${
          formData.agree
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
