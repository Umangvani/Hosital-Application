import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import Doctor_cart from "./Doctor_cart";
import Testomonial from "./Testomonial";
import { Link } from "react-router-dom";
import img1 from "./doctor_img-removed.png";
import img2 from "./doctor image2.jpg";
import img3 from "./image_doctor1-removebg-preview.png";
import img4 from "./doctor_image3-removebg-preview.png";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5 md:px-30 ">
      <div className="relative flex flex-wrap justify-evenly w-full gap-20 h-130  mt-5 ">
        {/* Top Section */}
        <div className=" max-w-3xl py-10 ">
          <h1 className="text-5xl font-bold text-blue-800 ">
            We care <br /> <span className="text-black">about your health</span>
          </h1>

          <p className="text-gray-500 my-8">
            Good health is the state of mental, physical, and social well-being,
            and it does not <br /> just mean the absence of diseases.
          </p>

          <div className="flex  gap-10 mt-10">
            <button className="bg-blue-800 text-white px-14 py-3 rounded-lg shadow-lg hover:bg-blue-900">
              <Link to="/appointment">Book an appointment</Link>
            </button>
            <button className="flex items-center gap-2 text-gray-700">
              <span className="p-2 rounded-full border-gray-400">
                ▶ Watch videos
              </span>
            </button>
          </div>

          <p className="mt-8 ">
            Become a member of our hospital community?{" "}
            <a href="#" className="text-blue-900 font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Doctor Image with Circular Design */}
        <div className="relative w-md h-md w-xl mt-12 p-5 flex justify-center ">
          <div className="border-15 border-gray-200  rounded-full w-100 h-100 flex justify-center items-center p-2 ">
            <img
              src={
                "data:image/jpeg;base64,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"
              } // Replace with actual image URL
              alt="Doctor"
              className="rounded-full w-90 h-90 mx-auto border-15 border-blue-800"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-10 left-10 p-3 backdrop-blur-xl rounded-lg outline-1 outline-black/5 shadow-md flex items-center gap-2">
            <span className="text-blue-800">🔍</span> Well Qualified Doctors
          </div>
          <div className="absolute top-45 right-0 backdrop-blur-xl p-3 rounded-lg outline-1 outline-black/5 shadow-md flex items-center gap-2">
            <span className="text-blue-800">📅</span> Book an appointment
          </div>
          <div className="absolute bottom-40 left-0 backdrop-blur-xl p-3 rounded-lg outline-1 outline-black/5 shadow-md flex items-center gap-2 ">
            <span className="text-blue-800">📞</span> Contact: +91 913199214
          </div>
        </div>

        {/* Search Bar */}
        <div className=" absolute bottom-12 left-21 w-220 max-w-4xl bg-gray-100 p-4 rounded-lg flex items-center justify-between mt-8 outline-1 outline-black/10 shadow-[1px_2px_20px_rgba(0,0,0,0.4)] ">
          <input
            type="text"
            placeholder="Name of Doctor"
            className="p-2 w-1/3 rounded-md border border-gray-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Speciality"
            className="p-2 w-1/3 rounded-md border border-gray-300 focus:outline-none"
          />

          <ToggleSwitch />
          <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900">
            Search
          </button>
        </div>
      </div>

      {/* our medical services */}
      <div className="py-3 text-center">
        <h1 className="text-3xl font-normal pt-9 pb-15">
          Our Medical Services
        </h1>
        <div className="flex gap-25 my-5">
          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center shadow-md text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800 hover:duration-300 hover:shadow-2xl">
            {/* <i className="material-symbols-outlined">add_task</i> */}

            <p>Well equipped lab</p>
          </div>

          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800 hover:duration-300 hover:shadow-2xl">
            {/* <i className="material-symbols-outlined">ambulance</i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <Link to="/EmergencyAmbulance"><p>Emergency Ambulance</p></Link>
          </div>

          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center drop-shadow-3xl text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800 hover:duration-300 hover:shadow-2xl ">
            {/* <i className="material-symbols-outlined">book_online</i> */}
            <Link to="/appointment"><p>Online Appointment</p></Link>
          </div>

          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center shadow-md text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800  hover:duration-300 hover:shadow-2xl">
            {/* <i className="material-symbols-outlined">perm_phone_msg</i> */}
            <Link to="/contactus">contactus</Link>
          </div>
        </div>
      </div>

      {/* meet our doctors */}
      <div className="text-center">
        <h1 className="text-3xl font-normal pt-9 pb-1/2">Meet Our Doctors</h1>
        <p className="text-sm/6 text-gray-500 mb-10">
          Well qualified doctors are ready to serve you
        </p>

        <div className=" grid grid-cols-2 gap-20">
          <Doctor_cart
            name="Dr. Robert Henry"
            specility="Cardiologist"
            img={img1}
          />
          <Doctor_cart
            name="Dr. Harry Littleton"
            specility="Neurologist"
            img={img3}
          />
          <Doctor_cart
            name="Dr. Sharina Khan"
            specility="Gynologist"
            img={img2}
          />
          <Doctor_cart
            name="Dr. Sanjeev Kapoor"
            specility="Child Specialist"
            img={img4}
          />
        </div>

        <div className="text-center">
          <button className="bg-blue-800 px-5 py-2 rounded-xl mt-10 text-white">
            See more
          </button>
        </div>
      </div>

      {/* Patients Testimonial */}
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-normal pt-15 pb-1/2">
          Patients Testimonial
        </h1>
        <p className="text-sm/6 text-gray-500 mb-10">
          Let’s see what our happy patients says
        </p>

        <div className="grid grid-cols-3 gap-20">
          <Testomonial
            name="Sara Ali Khan"
            speciality="Cardiologist Patient"
            rating={5}
            review="Thanks for all the services, no doubt it is the best hospital."
            imgSource={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6209AyYsaGjpTevaQkeS2bmDAKwyQXmXWQ&s"
            }
          />
          <Testomonial
            name="Simon Targett"
            speciality="Neurologist Patient"
            rating={5}
            review="Thanks for all the services, no doubt it is the best hospital."
            imgSource={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IDtqoyQhAU2XKPnfIzcYc6TFF6owRjz91Q&s"
            }
          />
          <Testomonial
            name="Sara Ali Khan"
            speciality="Cardiologist Patient"
            rating={5}
            review="Thanks for all the services, no doubt it is the best hospital."
            imgSource={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsg35Ad0pnDOl0tBxO8qP0h_KRMoRtDb90g&s"
            }
          />
        </div>
      </div>

      {/* Subscribe To Our Newsletter */}
      <div className="mb-20 text-center">
        <h1 className="text-3xl font-normal pt-15 pb-1/2">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-sm/6 text-gray-500 mb-10">
          Get latest news of our hospital
        </p>

        <div className="w-2xl max-w-5xl py-5 px-10 bg-gray-200 rounded-xl shadow-xl ">
          <h3 className="pb-2 text-left ml-2 text-black">For Newsletter</h3>
          <div className="flex justify-between outline-1 outline-black/20 rounded-lg">
            <input
              type="email"
              className="outline-none ml-30 w-sm"
              placeholder="Enter your email here"
              minLength="5"
              maxLength="50"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />

            <button className=" text-white m-1  px-4 py-1 rounded-md bg-blue-900 hover:bg-blue-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
