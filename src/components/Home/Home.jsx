import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import Doctor_cart from "./Doctor_cart";
import Testomonial from "./Testomonial";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5 md:px-30 mt-12">
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
              Book an appointment
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

            <p>Emergency Ambulance</p>
          </div>

          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center drop-shadow-3xl text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800 hover:duration-300 hover:shadow-2xl ">
            {/* <i className="material-symbols-outlined">book_online</i> */}
            <p>Online Appointment</p>
          </div>

          <div className="size-50 bg-blue-800 rounded-2xl flex flex-col justify-center items-center shadow-md text-white hover:bg-white hover:text-blue-800 hover:outline-3 outline-blue-800  hover:duration-300 hover:shadow-2xl">
            {/* <i className="material-symbols-outlined">perm_phone_msg</i> */}
            <p>Call Center</p>
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
            img={
              "data:image/jpeg;base64,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"
            }
          />
          <Doctor_cart
            name="Dr. Harry Littleton"
            specility="Neurologist"
            img={
              "data:image/jpeg;base64,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"
            }
          />
          <Doctor_cart name="Dr. Sharina Khan" specility="Gynologist" />
          <Doctor_cart name="Dr. Sanjeev Kapoor" specility="Child Specialist" />
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
