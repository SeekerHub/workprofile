import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between mb-10 ">
      <h1 className="text-2xl font-bold tracking-wide">भावेश</h1>
      <nav className="space-x-6 text-zinc-300 text-2xl">
        <a href="#about" className="hover:text-blue">About</a>
        <a href="#blog" className="hover:text-blue">Projects</a>
      </nav>
    </header>
  );
}
