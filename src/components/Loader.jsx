import { useEffect, useRef, useState, startTransition } from 'react';
import { gsap } from 'gsap';
import '../App.css';
import './Loader.css';
import SpinnerData from '../Text/SpinnerData';
import { introAnimation, collapseWords, changeWelcome, progressAnimation } from './Animations';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import TransitionOut from './TransitionOut'
const Loader = () => {
  const loaderRef = useRef(null);
  const wordGroupsRef = useRef(null);
  const loaderWordsRef = useRef(null); // Reference for loader__words
  const overlayRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const welcomeRef = useRef(null);

  const [loading, setLoading] = useState(true)
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const navigate = useNavigate();

  // Preload the LandingScene when the component mounts
  useEffect(() => {
    const preloadScene = async () => {
      await import('../scenes/ZoomSlide');
      setSceneLoaded(true);
    };
    preloadScene().then(() => {
    });
  }, []);

  const waitForSceneLoaded = () => {
    return new Promise((resolve) => {
      const checkLoaded = () => {
        if (sceneLoaded) {
          resolve();
        } else {
          requestAnimationFrame(checkLoaded);
        }
      };
      checkLoaded();
    });
  };

  // ANIMATIONS
  useEffect(() => {
    const handleClick = () => {
      document.removeEventListener('click', handleClick);
      startTransition(() => {
        setLoading(false);
        navigate('/Home')
      });
    };

    const openListener = () => {
      document.addEventListener('click', handleClick);
    };

    const tl = gsap.timeline();
    tl
      .add(introAnimation(wordGroupsRef))
      .add(progressAnimation(progressRef, progressNumberRef), '-=-4')
      .add(collapseWords(loaderRef, loaderWordsRef, overlayRef), '+=0')
      .add(() => waitForSceneLoaded()) // Wait until sceneLoaded is true
      .add(changeWelcome(welcomeRef), '+=0')
      .call(openListener);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [sceneLoaded]);

  return (
    <>
    <div className="loader__wrapper">
      <div className="loader" ref={loaderRef}>
        <div className="loader__words" ref={loaderWordsRef}>
          <div className="loader__overlay" ref={overlayRef}></div>
          <div className="loader__wordsGroup" ref={wordGroupsRef}>
            {[...Array(5)].map((_, iteration) => (
              SpinnerData.map((word, index) => {
                const globalIndex = iteration * SpinnerData.length + index; // Calculate global index
                if (globalIndex === 101) { // Check if it's the 101st word
                  return (
                    <div key={`${iteration}-${index}`}>
                      <span className="loader__word">
                        <div className="welcome_word" ref={welcomeRef} style={{ position: 'relative', zIndex: 1 }}>
                          welcome
                        </div>
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <span key={`${iteration}-${index}`} className="loader__word">
                      {word}
                    </span>
                  );
                }
              })
            ))}
          </div>
        </div>
      </div>
      <div className="loader__progressWrapper">
        <div className="loader__progress" ref={progressRef}></div>
        <span className="loader__progressNumber" ref={progressNumberRef}>0</span>
      </div>
    </div>
    <TransitionOut/>
    </>
  );
};


export default Loader;
