import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularArticles from '../components/PopularArticles';
import PopularTests from '../components/PopularTests';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularArticles />
      <PopularTests />
      <Testimonials />
    </>
  );
}