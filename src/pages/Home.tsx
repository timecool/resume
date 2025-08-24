import React from "react";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Home: React.FC = () => {
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
      <main>
        <Header />
        <AboutMe />
        <Timeline />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
