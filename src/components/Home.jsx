import React from "react";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import About from "./About";
import AboutPage from "./AboutPage";

export default function Home() {
  const [page, setPage] = React.useState("home");
  return (
    <main>
      
      <br/>
      <Header setPage = {setPage}/>
      <br/>
      {
      page=="home" ? 
      
        <>
        <ProfileSection />
        <About />
        <ProjectSection />
        </>
       : 
        <AboutPage />
      }
    </main>
  );
}
