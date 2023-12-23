import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CgHello } from 'react-icons/cg';
import { TbDeviceImacCode } from 'react-icons/tb';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Preloader from './pages/Preloader';
import Footer from './layouts/Footer';

function App() {
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
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' Component={HomePage} />
                    <Route path='/about' Component={AboutPage} />
                    <Route path='/skill' Component={SkillPage} />
                    <Route path='/project' Component={ProjectPage} />
                    <Route path='/contact' Component={ContactPage} />
                </Routes>
                <Footer />
            </div>
        )
    )
}

// function App() {
//     const [header, setHeader] = useState("header")

//     const listenScrollEvent = (event) => {
//         if (window.scrollY < 73) {
//             return setHeader("header")
//         } else if (window.scrollY > 70) {
//             return setHeader("header2")
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', listenScrollEvent);

//         return () =>
//             window.removeEventListener('scroll', listenScrollEvent);
//     }, []);

//     return (
//         <div className="portofolio">
//             <header className={`portofolio__header ${header} d-flex align-items-center justify-content-between sticky-top`}>
//                 <div className='hstack gap-3'>
//                     <img src="/assets/zian.png" className='logo' alt="" />
//                     <h5>ZIANATUL MUNA</h5>
//                 </div>
//                 <Navbar />
//             </header>
//             <main>
//                 <section>
//                     <div className="portofolio-opening d-flex align-items-center">
//                         <div className="text-white">
//                             <h2>Hi, I'm Zian</h2>
//                             <h2>A Web Developer</h2>
//                             <p className="mt-4">A Junior Fullstack Web Developer building the Front-end and Back-End of Websites and Web Applications.</p>
//                             <p>Love coding and push the limits.</p>
//                             <button className='btn btn-warning rounded-5 px-5 py-2 mt-5'><h6>PROJECT</h6></button>
//                         </div>
//                     </div>
//                 </section>
//                 <section>
//                     <div className="portofolio-about">
//                         <h3 className="section-title">ABOUT ME</h3>
//                         <div className="portofolio-body">
//                             <p className='portofolio-body__profile text-center'>A person who focuses on being a web developer with 2 years of experience in creating responsive websites and managing database. Able to work in frontend and backend development to provide a good user experience. I'm trained to work in teams and have worked on several web projects. I'm quietly detail-oriented, persistent, highly committed, and enjoy learning new things in the process. I'm interested in jobs where I can contribute, learn, and grow. Please, feel free to reach out <a href="" className='text-purple'><CgHello /></a></p>
//                             <div className='portofolio-about__skill mt-5 text-center'>
//                                 <h4>My Skill</h4>
//                                 <ul className='d-flex gap-3 w-100 flex-wrap justify-content-center'>
//                                     <li>HTML</li>
//                                     <li>CSS</li>
//                                     <li>Bootstrap</li>
//                                     <li>JavaScript</li>
//                                     <li>React</li>
//                                     <li>PHP</li>
//                                     <li>Laravel</li>
//                                     <li>MySQL</li>
//                                     <li>Git</li>
//                                     <li>GitHub</li>
//                                     <li>REST API</li>
//                                     <li>Responsive Design</li>
//                                     <li>Progressive Web Apps</li>
//                                 </ul>
//                             </div>
//                             <div className="col">
//                                 <h4>Over The Years</h4>
//                                 <div className="row row-cols-sm-2 mt-3">
//                                     <div className="col card p-3">
//                                         <h3 className='text-purple'><TbDeviceImacCode /></h3>
//                                         <h5>Front-end </h5>
//                                         <span className='mt-3'>Build a responsive design. Managing UI/UX.</span>
//                                     </div>
//                                     <div className="col card p-3">
//                                         <h3 className='text-purple'><TbDeviceImacCode /></h3>
//                                         <h5>Front-end </h5>
//                                         <span className='mt-3'>Build a responsive design. Managing UI/UX.</span>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }


export default App;