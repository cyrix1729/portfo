import React, { useEffect } from 'react';
import DonutAnimation from '../components/DonutAnimation';
import Copyright from '../components/Copyright'
const ContactScene = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".text-con");

    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";

      let textContainer = document.createElement("div");
      textContainer.classList.add("block-con");

      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter-con");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play-con");
      });
    });
  }, []);

  return (
    <div>
      <div className="container-con">
      <a className="text-con" href="https://www.linkedin.com/in/farisjava/" target="_blank">LinkedIn</a>
<a className="text-con" href="https://github.com/cyrix1729" target="_blank">Github</a>
<a className="text-con" href="mailto:farisj.se@gmail.com">Email Me</a>

      </div>
   <DonutAnimation/>
   <Copyright/>
   </div>
  );
};

export default ContactScene;
