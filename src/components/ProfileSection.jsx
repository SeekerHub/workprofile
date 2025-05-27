import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 mt-12">
      {/* <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-tr from-pink-500 to-orange-400">
        <img src="/profile.jpg" alt="Conor" className="w-full h-full object-cover" />
      </div> */}
      <div>
        <h2 className="text-3xl mb-2">
          hey, I'm bhavesh.{" "}
          <span className="text-zinc-300 text-xl font-montserrat">
            I'm a frontend developer and a adventure freak.
          </span>
        </h2>
        <div className="flex text-3xl space-x-4 mt-2 ">
          <a href="#"><FaTwitter /></a>
          <a href="#" className="text-red-400"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/bhavesh1999/" className="text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/SeekerHub" ><FaGithub /></a>
          <a href="https://drive.google.com/file/d/1fXDjeLEbOwt_HuPuS0_Pd1DSwO5hRLxj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400">
            <FaFileDownload /></a>
        </div>
      </div>
    </section>
  );
}
