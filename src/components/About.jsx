import React from "react";

export default function About() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12">
      {/* <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-tr from-pink-500 to-orange-400">
        <img src="/profile.jpg" alt="Conor" className="w-full h-full object-cover" />
      </div> */}
      <div>
        <div className="text  mb-2">
          I am a Software Developer from India. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
        </div>
        <div className="mb-2">
          I like to explore new tech and always curious to play with new languages and build stuff round them , for now playing with  <span className="font-semibold">JavaScript, ES6+, React, Tailwind, Node.js, c3.....</span>. 
          <br />
          I am currently learning <span className="font-semibold">Golang</span> and exploring its potential for building efficient and concurrent applications.
        </div>

      </div>
    </section>
  );
}
