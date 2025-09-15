import React from 'react';
import HeroJharConnect from './HeroJharConnect';
import WhyJharkhand from './WhyJharkhand';
import PlatformFeatures from './PlatformFeatures';
import Testimonials from './Testimonials';
import LocalImpact from './LocalImpact';
import FinalCTA from './FinalCTA';
import FooterJharConnect from './FooterJharConnect';


const LandingJharConnect = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <HeroJharConnect />
    <div id="why-jharkhand"><WhyJharkhand /></div>
    <div id="features"><PlatformFeatures /></div>
    <div id="testimonials"><Testimonials /></div>
    <div id="impact"><LocalImpact /></div>
    <FinalCTA />
    <FooterJharConnect />
  </div>
);

export default LandingJharConnect;
