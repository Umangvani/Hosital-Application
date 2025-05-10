import React, { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form status state
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: ''
    });

    // Simulate API call with timeout
    setTimeout(() => {
      if (Object.values(formData).every(field => field.trim() !== '')) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Your message has been sent successfully. We will get back to you soon!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            submitted: false,
            message: ''
          }));
        }, 5000);
      } else {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: 'Please fill in all fields.'
        });
      }
    }, 1500);
  };

  // Contact info data
  const contactMethods = [
    {
      icon: <PhoneIcon className="w-6 h-6 text-blue-600" />,
      title: "Call Us",
      content: [
        { primary: "+91-8040245807", secondary: "General Inquiries" },
        { primary: "+91-8040245808", secondary: "Technical Support" }
      ]
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      content: [
        { primary: "contact@medicalapp.com", secondary: "General Inquiries" },
        { primary: "support@medicalapp.com", secondary: "Technical Support" }
      ]
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />,
      title: "Live Chat",
      content: [
        { primary: "Available 24/7", secondary: "Quick responses to your queries" }
      ]
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      content: [
        { primary: "Monday - Friday: 9:00 AM - 6:00 PM", secondary: "" },
        { primary: "Saturday: 10:00 AM - 4:00 PM", secondary: "" },
        { primary: "Sunday: Closed", secondary: "" }
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment through our website by using the 'Find and Book' feature, or by calling our appointment helpline at +91-8040245807."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact our billing department for specific information regarding your insurance coverage."
    },
    {
      question: "How do I access my medical records?",
      answer: "You can access your medical records through our patient portal. If you haven't registered yet, please call our support team who will guide you through the process."
    },
    {
      question: "Can I get prescription refills through the website?",
      answer: "Yes, registered patients can request prescription refills through our patient portal or by calling our pharmacy department directly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Contact Us</h1>
          <p className="text-blue-200 text-center mt-4 max-w-2xl mx-auto">
            We're here to help. Get in touch with us and we'll respond as soon as we can.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Map Side */}
            <div className="w-full md:w-1/2 bg-gray-200 min-h-[300px] relative">
              {/* Replace with actual map component or embed Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 text-blue-600 mx-auto" />
                  <p className="mt-4 text-gray-600"></p>
                </div>
              </div>
            </div>
            
            {/* Address Side */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
              <div className="flex items-start mb-6">
                <MapPinIcon className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <p className="text-gray-600">
                    123 Healthcare Avenue<br />
                    Tech Park, Bangalore 560001<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <PhoneIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+91-8040245807</span>
              </div>
              
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">contact@medicalapp.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
              <div className="space-y-3">
                {method.content.map((item, i) => (
                  <div key={i}>
                    <p className="font-medium text-gray-800">{item.primary}</p>
                    {item.secondary && (
                      <p className="text-sm text-gray-500">{item.secondary}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & FAQ Section */}
      <div className="container mx-auto px-4 py-12 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-start">
                  <ExclamationCircleIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center w-full md:w-auto"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            </div>
            
            {/* FAQ Section */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600">
                  Don't see your question here? Feel free to reach out to us directly using the contact form or any of the methods listed above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Newsletter Section */}
      <div className="bg-blue-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-white text-white border-1 border-white"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-blue-200 text-sm mt-2">
                Get updates on health tips, new features and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;