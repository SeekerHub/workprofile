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
          Hey, I'm Bhavesh.{" "}
          <span className="text-zinc-300 text-xl font-montserrat">
            I'm a frontend developer and a anime freak.
          </span>
        </h2>
        <div className="flex text-3xl space-x-4 mt-2 ">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="/Bhavesh_Resume.pdf" download>
            <FaFileDownload /></a>
        </div>
      </div>
    </section>
  );
}
