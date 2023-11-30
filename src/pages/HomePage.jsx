import React from 'react';
import HomeSection from '../containers/HomeSection';
import AboutSection from '../containers/AboutSection';
import SkillSection from '../containers/SkillSection';
import ProjectSection from '../containers/ProjectSection';

const HomePage = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
    </main>
  )
}

export default HomePage