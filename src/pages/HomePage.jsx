import React, { useState, useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import Preloader from '../pages/Preloader';
import HomeSection from '../containers/HomeSection';
import AboutSection from '../containers/AboutSection';
import SkillSection from '../containers/SkillSection';
import ProjectSection from '../containers/ProjectSection';
import ServiceSection from '../containers/ServiceSection';
import ContactSection from '../containers/ContactSection';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fakeDataFetch = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };

        fakeDataFetch();
    }, []);

    return(
        isLoading ? (
            <Preloader />
        ) : (
          <>
            <Navbar />
            <main>
              <HomeSection />
              <AboutSection />
              <SkillSection />
              <ServiceSection />
              <ProjectSection />
              <ContactSection />
            </main>
          </>
        )
    )
}

export default HomePage