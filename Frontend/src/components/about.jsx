import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-blue-100 text-white pt-16 h-screen dark:bg-slate-500 dark:text-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-full">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            <span className="text-pink-500">About Us</span>
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center mr-8">
              <img
                src="./pp.jpg"
                alt="Your Photo"
                className="w-40 h-40 rounded-full mb-2"
              />
              <a
                href="https://www.linkedin.com/in/suraj-mandal-023293243/"
                className="text-blue-500 hover:underline"
              >
                Linkedin
              </a>
            </div>
            <div className="flex flex-col items-center ml-8">
              <img
                src="./pp1.jpg"
                alt="Your Photo"
                className="w-40 h-40 rounded-full mb-2"
              />
              <a
                href="https://www.linkedin.com/in/maniraj-yadav/"
                className="text-blue-500 hover:underline"
              >
                Linkedin
              </a>
            </div>
          </div>
          <p className="mt-4 text-black leading-relaxed text-center">
            Hey there! We're second-year BTech students at <span className="text-pink-500">SRM University-AP</span>,
            and we just wrapped up a project with the help of our awesome guide,
            Mr. Vijayakrishna Rowthu. It's a big deal for us because it's part
            of our second-year external lab exam. For our project, we used stuff
            like React components and Tailwind CSS, which we learned in class.
            And on the backend (the behind-the-scenes stuff), we worked with
            Node.js and MongoDB to handle data smoothly. Of course, we didn't
            figure it all out on our own. We also got some tips and tricks from
            online resources and older students who gave us a hand with some
            tricky parts. This project isn't just about passing a test. It's
            about showing what we've learned and how we can work together to
            make something cool. We're pretty proud of how it turned out!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
