import React from "react";
import img from './Doctors_img.png'

const AboutUs = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-800">
          About Us
        </h1>

        {/* Section 1: Introduction */}
        <div className="mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-center">
            At <span className="font-semibold text-blue-700">Blue Hospital</span>, we are
            dedicated to revolutionizing the way healthcare is accessed. With a seamless
            online platform for booking doctor appointments, we connect patients with
            qualified medical professionals, ensuring timely, efficient, and compassionate care.
          </p>
        </div>

        {/* Section 2: Our Mission */}
        <div className="md:flex items-center gap-12 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={img}
              alt="Doctors team"
              className="rounded-xl  w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We aim to bridge the gap between patients and healthcare providers by offering
              a reliable, user-friendly platform that facilitates instant bookings, virtual
              consultations, and real-time support. Our mission is to make healthcare
              accessible to everyone—anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Section 3: What Sets Us Apart */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            What Sets Us Apart
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed list-disc list-inside">
            <li>✔️ 24/7 emergency and telehealth support</li>
            <li>✔️ Verified, experienced doctors across multiple specialties</li>
            <li>✔️ Hassle-free appointment scheduling & rescheduling</li>
            <li>✔️ End-to-end patient care with electronic health records</li>
            <li>✔️ Mobile-friendly design for quick access on the go</li>
          </ul>
        </div>

        {/* Section 4: Our Values */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Compassion", icon: "❤️", desc: "We care for every patient like family." },
            { title: "Innovation", icon: "💡", desc: "We build tech to simplify healthcare." },
            { title: "Trust", icon: "🤝", desc: "Your privacy and care are our top priorities." },
          ].map((val, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{val.title}</h3>
              <p className="text-gray-700">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 5: Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            Whether you're a patient looking for quality care or a healthcare provider ready
            to make a difference, <span className="font-semibold">Blue Hospital</span> is your trusted partner in digital health.
          </p>
          <a
            href="/contact"
            className="bg-blue-700 text-white py-3 px-10 rounded-lg shadow hover:bg-blue-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
