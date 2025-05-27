import React from "react";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import About from "./About";
// import Header from "./components/Header";
// import ProfileSection from "./components/ProfileSection";
// import RecentPosts from "./components/RecentPosts";

export default function Home() {
  return (
    <main>
      
      <br/>
      <Header />
      <br/>
      <ProfileSection />
      <About />
      <ProjectSection />
    </main>
  );
}
