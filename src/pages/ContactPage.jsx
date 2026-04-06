import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "../services/api";
import toast from "react-hot-toast";

export default function ContactPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const validate = () => {
    if (!form.name || !form.phone || !form.message) {
      toast.error("All fields are required!");
      return false;
    }

    // simple BD phone validation
    const phoneRegex = /^(01[3-9]\d{8})$/;

    if (!phoneRegex.test(form.phone)) {
      toast.error("Invalid phone number!");
      return false;
    }

    return true;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const res = await submitContactForm(formData);

      toast.success(res.message || "Message sent successfully!");

      // reset form
      setForm({ name: "", phone: "", message: "" });

      // 🔥 auto close modal after 1s
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.85, y: 60, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 60, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0B1F3A]"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0B1F3A]"
          />

           <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0B1F3A]"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0B1F3A]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1F3A] text-white py-2 rounded-lg font-semibold hover:bg-[#132c52]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}