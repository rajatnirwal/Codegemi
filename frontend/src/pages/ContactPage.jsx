import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Play, Clock } from "lucide-react";

const ContactPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-800/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-center z-10 px-4"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We'd love to hear from you. Let's start a conversation.
          </motion.p>
        </motion.div>
      </section>
      <ContactForm />

      {/* Contact Info + Virtual Tour Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-8"
            >
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Phone className="text-indigo-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us 24/7</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    +91 8840531793
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Mail className="text-purple-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    codegemi@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <MapPin className="text-cyan-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Lane no.7, Chipyana Buzurg, Ghaziabad.
                  </h3>
                  <p className="text-gray-500">Uttar Pradesh, India, 201009</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Mon - Fri: 9AM - 6PM
                  </h3>
                  <p className="text-gray-500">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Virtual Tour */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="/assets/img/office-tour.jpg"
                alt="Office tour preview"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white"
              >
                <motion.div className="relative" animate={pulse}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play size={32} className="text-indigo-600 ml-1" />
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold mt-4 text-center">
                  Take a Virtual Office Tour
                </h3>
                <p className="text-gray-200 text-center mt-2">
                  See where the magic happens
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
