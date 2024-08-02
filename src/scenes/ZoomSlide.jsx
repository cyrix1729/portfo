import React, { useLayoutEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Styling/ZoomScroll.css'
import LandingScene from './LandingScene';
import Project from './ProjectScene';
import ExpScene from './ExpScene';
import ContactScene from './ContactScene';

gsap.registerPlugin(ScrollTrigger);

const ZoomSlide = () => {
    const navSec = (percentage) => {
      const targetPosition = document.body.scrollHeight * percentage;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };
  const [runAnim, setRunAnim] = useState(false)
  const nav= useRef(null);
  useLayoutEffect(() => {
    const totalSlides = 5;
    const sectionHeight = (document.body.scrollHeight - window.innerHeight) / totalSlides;

    const slides = document.querySelectorAll('.slide-zs');

    slides.forEach((slide, index) => {

      gsap.to(slide, {
        zIndex: (progress) => {
          return progress < 0.5 ? 1 : 5 - index;
        },
        scrollTrigger: {
          start: sectionHeight * index + ' top',
          end: sectionHeight * (index + 1) + ' top',
          scrub: 1,
        },
      });

      // Slide scaling
      gsap.fromTo(
        slide,
        { scale: index === 0 ? 1 : 0 },
        {
          scale: 1,
          scrollTrigger: {
            start: sectionHeight * index + ' top',
            end: sectionHeight * (index + 1) + ' top',
            scrub: 1,
          },
        }
      );

      if (index !== 0 &&  index !==1) {
        gsap.fromTo(
          slide.querySelector('.slide-img-zs'),
          { scale: 2 },
          {
            scale: 1,
            top: '0%',
            scrollTrigger: {
              start: sectionHeight * index + ' top',
              end: sectionHeight * (index + 1) + ' top',
              scrub: 1,
            },
          }
        );
      }
      if (index == 1){
        gsap.fromTo(
          slide.querySelector('.slide-img-zs'),
          { scale: 3 },
          {
            scale: 1,
            top: '0%',
            scrollTrigger: {
              start: sectionHeight * index + ' top',
              end: sectionHeight * (index + 1) + ' top',
              scrub: 1,
              onUpdate: () => {
                
                const scaleValue = gsap.getProperty(slide.querySelector('.slide-img-zs'), 'scale');
                if (scaleValue <= 1.9) {
                  setRunAnim(true);
                }
              }
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="slider-zs">
       {/* <nav className = 'lp-nav' ref = {nav}>
      <button className="lp-a" onClick={() => navSec(0)}>Home</button>
      <button className="lp-a" onClick={() => navSec(0.3)}>Experience</button>
      <button className="lp-a" onClick={() => navSec(0.5)}>Projects</button>
      <button className="lp-a" onClick={() => navSec(0.8)}>Contact</button>
      </nav> */}
      <div className="slide-zs" id="slide-1">
        <div className="slide-img-zs"> 
          <LandingScene  />
        </div>
      </div>
      <div className="slide-zs" id="slide-3">
        <div className="slide-img-zs">
      <ExpScene runAnim = {runAnim}/> 
        </div>
      </div>
      <div className="slide-zs" id="slide-2">
        <div className="slide-img-zs">
          <Project />
        </div>
      </div>
      <div className="slide-zs" id="slide-4">
        <div className="slide-img-zs">
          <ContactScene />
        </div>
      </div>
    </div>
  );
};

export default ZoomSlide;