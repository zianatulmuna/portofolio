import React from 'react';
import HomeSection from '../containers/HomeSection';
import AboutSection from '../containers/AboutSection';
import SkillSection from '../containers/SkillSection';
import ProjectSection from '../containers/ProjectSection';
import ServiceSection from '../containers/ServiceSection';

const HomePage = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <SkillSection />
    </main>
  )
}

export default HomePage