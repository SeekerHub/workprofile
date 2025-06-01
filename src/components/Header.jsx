import React from "react";

export default function Header({setPage}) {
  return (
    <header className="flex justify-between mb-10 ">
      <h1 className="text-4xl font-bold tracking-wide" onClick={() => setPage("home")}>भावेश</h1>
      <nav className="space-x-6 text-zinc-300 text-2xl">
        <a href="#about" onClick={() => setPage("about")} className="hover:text-blue">About</a>
        <a href="#projects" className="hover:text-blue">Projects</a>
      </nav>
    </header>
  );
}
