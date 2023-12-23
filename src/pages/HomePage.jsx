import React from 'react';
import HomeSection from '../containers/HomeSection';
import AboutSection from '../containers/AboutSection';
import SkillSection from '../containers/SkillSection';
import ProjectSection from '../containers/ProjectSection';
import ServiceSection from '../containers/ServiceSection';
import ContactSection from '../containers/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}

export default HomePage