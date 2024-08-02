import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from '../components/ParticleCanvas';
import ComputerScene from './ComputerScene';
import TransitionIn from '../components/TransitionIn';
import { gsap } from 'gsap';
import { fadeInAndUp, fadeIn } from '../components/Animations';
import Scroll from '../components/Scroll'

const LandingPage = () => {
  const particleRef = useRef(null);
  const computerRef = useRef(null);
  const lineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const fullPageRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false)

 
  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(fadeIn(fullPageRef.current), "+0.8")
      .add(fadeInAndUp(lineRef.current), "+=0.5")
      .add(fadeInAndUp(line1Ref.current), "+=0.1")
      .add(fadeInAndUp(line2Ref.current), "+=0.1")
      .add(fadeInAndUp(computerRef.current), "+=0.1")
      .add(fadeIn(particleRef.current), "+=0.1") 
      
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setShowScroll(true);
    }, 19000)

  }, [])

  return (
    <div className="landingPage-container">

      <div className='landingPage' ref={fullPageRef}>
        <div className='particle' ref={particleRef}>
          <ParticleCanvas />
        </div>
        <div className='computer' ref={computerRef}>
          <ComputerScene />
        </div> 
      <div className='main_text'>
          <p className = 'line' ref = {lineRef}> I'm Faris,</p>
          <p className = 'line' ref = {line1Ref}> a software</p>
          <p className = 'line' ref = {line2Ref}>  engineer. </p>
      </div>
      <div className = 'scroll_icon'>
      {showScroll ? <Scroll/> : null}
      </div>
      </div> 
      
      <TransitionIn />
    </div>
  );
};

export default LandingPage;