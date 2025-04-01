import React from "react";

function Footer() {
  return (
    <div className="">
      <footer className="w-full dark:bg-blue-800 text-white px-5 text-center">
        {/* main-box -content 3 grid boxes */}
        <div className="grid grid-cols-5 pt-30 pb-20 ">
          <div className="flex flex-col item-center gap-3 ">
            <h5
              className="text-4xl text--800 font-bold "
              style={{ color: "4200FF" }}
            >
              Blue
              <span className="font-medium text-3xl text-white"> Hospital</span>
            </h5>
            <p className="text-md pt-2">
              Providing quality healthcare with expert
              <br /> and advanced medical facilities.
            </p>
          </div>

          <div className="">
            <p className="font-semibold text-md mb-1">For Patients</p>
            <ul className="text-sm pb-1">
              <li className="hover:underline">search for Doctors</li>
              <li className="hover:underline">search for Clincs</li>
              <li className="hover:underline">search for Hosiptals</li>
              <li className="hover:underline">Blue Hospital Plus</li>
            </ul>
          </div>

          <div className="">
            <p className="font-semibold mb-2 text-lg">For Doctors</p>
            <ul className="text-sm">
              <li className="hover:underline">Blue Consult</li>
              <li className="hover:underline">Blue Profile</li>
            </ul>

            <p className="font-semibold mb-1 mt-3 text-lg">For Clinic</p>
            <ul className="text-sm">
              <li className="hover:underline">Blue Prime</li>
              <li className="hover:underline">Blue Call</li>
            </ul>
          </div>

          <div className="">
            <p className="font-semibold mb-2 text-lg">Social</p>
            <ul className="text-sm">
              <li className="hover:underline">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:underline">
                <a href="#">Facebook</a>
              </li>
              <li className="hover:underline">
                <a href="#">Twitter</a>
              </li>
              <li className="hover:underline">
                <a href="#">Youtube</a>
              </li>
              <li className="hover:underline">
                <a href="https://github.com/Umangvani" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="text-lg">
            <h2 className="text-lg font-semibold text-lg">Contact Us</h2>
            <p className="mt-2 text-sm">Phone: +91 9131399214</p>
            <p className="text-sm">Email: info@bluehospital.com</p>
            <p className="text-sm">Address: 123, Main Street, Madhya Pradesh</p>
          </div>
        </div>
        <p className="text-sm pb-2">
          &copy; 2025 Blue Hospital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
