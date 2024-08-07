import React, { useEffect, useState } from 'react';
import gsap from 'gsap'
import './Styling/Project.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { names, desc, notes, tech, link, link2 } from '../Text/Projects.js';
import img1 from '../Assets/1.png';
import img2 from '../Assets/2.png';
import img3 from '../Assets/3.png';
import img4 from '../Assets/4.png';
import img5 from '../Assets/5.png';
import img6 from '../Assets/6.png';
import img7 from '../Assets/7.png';
import img8 from '../Assets/8.png';
import img9 from '../Assets/9.png';
import img10 from '../Assets/10.png';
import img11 from '../Assets/11.png';
import img12 from '../Assets/12.png';

import gif1 from '../Assets/1.gif';
import gif2 from '../Assets/2.gif';
import gif3 from '../Assets/3.gif';
import gif4 from '../Assets/4.gif';
import gif5 from '../Assets/5.gif';
import gif6 from '../Assets/6.gif';
import gif7 from '../Assets/7.gif';
import gif8 from '../Assets/8.gif';
import gif9 from '../Assets/9.gif';
import gif10 from '../Assets/10.gif';
import gif11 from '../Assets/11.gif';
import gif12 from '../Assets/12.gif';
import info from '../Assets/info.jpg';

const gifs = [
  gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12
];

const ProjectScene = () => {
  const [mobile, setMobile] = useState((screen.width <= 900));
  const [num, setNum] = useState(0);
  const [intro, setIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (screen.width <= 900) setMobile(true);
      else setMobile(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const imageElements = document.querySelectorAll(".img-proj2");

    const colorArray = [
      "#c4baa5", "#6D7783", "#888da8", "#B5B8AC", "#8e80c4", "#5F5F5F", "#80abc4", "#2e8abf",
      "#A6A6A6", "#c1f0bd", "#e0d5e8", "#809174", "#616161", "#C29651", "#5E6471", "#B0A89D"
    ];

    const handleImageClick = (event) => {
      setIntro(false);
      const imgAlt = event.currentTarget.alt;
      const imgNumber = parseInt(imgAlt, 10);

      setNum(imgNumber - 1);
      const projectSceneProjElement = document.querySelector('.project-scene-proj');
      projectSceneProjElement.style.backgroundColor = colorArray[imgNumber - 1];

      const newImgSrc = gifs[imgNumber - 1];

      const previewContainer = document.querySelector(".preview-container-proj");
      const currentLastImg = previewContainer.querySelector(".img-proj");

      if (currentLastImg) {
        gsap.to(currentLastImg, { duration: 1, scale: 1.5, left: "-50%" });
      }

      const newImg = document.createElement("img");
      newImg.classList.add("img-proj");
      newImg.src = newImgSrc;
      newImg.style.position = "absolute";
      newImg.style.right = "-100%";

      previewContainer.appendChild(newImg);

      gsap.to(newImg, { duration: 1, right: "0%" });
    };

    imageElements.forEach((img) => {
      img.addEventListener("click", handleImageClick);
    });

    return () => {
      imageElements.forEach((img) => {
        img.removeEventListener("click", handleImageClick);
      });
    };
  }, [num]);

  useEffect(() => {
    const handleScroll = () => {
      const projectScene = document.querySelector('.project-scene-proj');
      const scrollTop = projectScene.scrollTop;
      const scrollHeight = projectScene.scrollHeight;
      const clientHeight = projectScene.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const projectScene = document.querySelector('.project-scene-proj');
    projectScene.addEventListener('scroll', handleScroll);

    return () => {
      projectScene.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="project-scene-proj"
      style={{ backgroundColor: '#B69671', height: scrolled ? 'auto' : '100vh'}}
    >
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000 // Ensure the button is on top
        }}
        onClick={() => setIntro(true)}
      >
        <AiOutlineInfoCircle size={24} />
      </button>
      <nav className="nav-proj">
        {intro ? <div className='intro-proj'>
          <div className="col-proj">
            <div className="copy-proj" style={{ width: '80vw' }}>
              Exhibition of recent projects. Excludes all projects from current position due to 
              confidentiality. If you are interested in any projects, feel free to contact me in the contact page below.
              <br /><br />
              Selecting an image below will bring up corresponding details
            </div>
          </div>
        </div> :
          <React.Fragment>
            <div className="col-proj">
              <div className="copy-proj">
                <p className="p-proj">(Name)</p>
                <p className="p-proj">{names[num]}</p>
              </div>
              <div className="copy-proj">
                <p className="p-proj">(Description)</p>
                <p className="p-proj">{desc[num]}</p>
              </div>
              <div className="copy-proj">
                <p className="p-proj">(Notes)</p>
                <p className="p-proj">{notes[num]}</p>
              </div>
              <div className="copy-proj">
                <p className="p-proj">(Technologies)</p>
                <p className="p-proj">{tech[num]}</p>
              </div>
              <div className="copy-proj">
                <p className="p-proj">(Link)</p>
                <p className="p-proj"><a href={link[num].link}>{link[num].name}</a></p>
                <p className="p-proj"><a href={link2[num].link}>{link2[num].name}</a></p>
              </div>
            </div>
            <div className="col-proj">
              <p className="logo-proj p-proj">1-01</p>
            </div>
          </React.Fragment>}
      </nav>
      <div className="container-proj">
        {/* {mobile ? <Mobile images={images} /> : */}
          <div className="gallery-proj">
            <div className="row-proj">
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">1</p></div>
                <div className="img-proj"><img className="img-proj2" src={img1} alt="1" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">2</p></div>
                <div className="img-proj"><img className="img-proj2" src={img2} alt="2" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">3</p></div>
                <div className="img-proj"><img className="img-proj2" src={img3} alt="3" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">4</p></div>
                <div className="img-proj"><img className="img-proj2" src={img4} alt="4" /></div>
              </div>
            </div>
            <div className="row-proj">
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">5</p></div>
                <div className="img-proj"><img className="img-proj2" src={img5} alt="5" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">6</p></div>
                <div className="img-proj"><img className="img-proj2" src={img6} alt="6" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">7</p></div>
                <div className="img-proj"><img className="img-proj2" src={img7} alt="7" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">8</p></div>
                <div className="img-proj"><img className="img-proj2" src={img8} alt="8" /></div>
              </div>
            </div>
            <div className="row-proj">
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">9</p></div>
                <div className="img-proj"><img className="img-proj2" src={img9} alt="9" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">10</p></div>
                <div className="img-proj"><img className="img-proj2" src={img10} alt="10" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">11</p></div>
                <div className="img-proj"><img className="img-proj2" src={img11} alt="11" /></div>
              </div>
              <div className="item-proj">
                <div className="index-proj"><p className="p-proj">12</p></div>
                <div className="img-proj"><img className="img-proj2" src={img12} alt="12" /></div>
              </div>
            </div>
          </div>

        {mobile ? <></> : 
        <div className="preview-proj">
          <div className="preview-container-proj">
            <img className="img-proj" src={intro ? info : gifs[num]} alt="preview" />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default ProjectScene;