import { useState } from "react";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataWithDate = { ...formData, date: getCurrentDateTime() };

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithDate),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "", date: "" });
        toast.success("Message Sent", { duration: 2000 });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 animate-fadeIn">
      <div>
        <Toaster />
      </div>
      <h1 className="text-3xl font-bold text-[#e274a9] mb-6 animate-fadeIn">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md animate-fadeIn"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#e274a9] focus:border-[#e274a9] sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#e274a9] focus:border-[#e274a9] sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#e274a9] focus:border-[#e274a9] sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={
              "bg-[#e274a9] text-[#ffffff] hover:text-[#e274a9] hover:bg-[#ffffff] border-2 border-[#e274a9] rounded-md duration-500 font-semibold px-4 py-2 transition-transform transform hover:scale-105"
            }
          >
            {isSubmitting ? (
              <Spinner animation="border" style={{ color: "#e274a9" }} />
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
