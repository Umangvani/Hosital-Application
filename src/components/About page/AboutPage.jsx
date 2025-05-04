import React from 'react';

function AboutPage() {
  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="mb-8">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="path/to/your/hospital-image.jpg" // Replace with your image
            alt="Our Hospital"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-indigo-500 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-3xl font-extrabold text-white text-center">About Our Hospital</h1>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          To provide exceptional, patient-centered healthcare with compassion, innovation, and a commitment to the well-being of our community.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Patient-Centered Care</li>
          <li>Integrity and Ethics</li>
          <li>Excellence and Innovation</li>
          <li>Teamwork and Collaboration</li>
          <li>Community Focus</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
        <p className="text-lg text-gray-700">
          Founded in [Year], our hospital has a long-standing tradition of serving the healthcare needs of [Your City/Region]... [Continue with a brief history].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Highly experienced and qualified doctors and medical staff.</li>
          <li>State-of-the-art medical technology and facilities.</li>
          <li>A patient-first approach with personalized care plans.</li>
          <li>Comprehensive range of medical services and specialties.</li>
          <li>A comfortable and caring environment for patients and their families.</li>
        </ul>
      </section>
    </main>
  );
}

export default AboutPage;