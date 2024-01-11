import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// styling
import './styles/style.css';
import './styles/custom.css';
import './styles/responsive.css';
import './styles/animation.css';

import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
AOS.init();

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>
);