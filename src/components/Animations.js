import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

export const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
        yPercent: -87.1,
        duration: 7,
        ease: "power3.inOut",
    });

    return tl;
};

export const collapseWords = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
        "clip-path": "polygon(0% 48%, 100% 48%, 100% 54%, 0% 54%)",
        duration: 1,
        ease: "expo.inOut",
    })

    return tl;
};
export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
            scaleX: 1,
            duration: 6,
            ease: "power3.inOut",
        })
        .to(
            progressNumberRef.current, {
                x: "90vw",
                duration: 6,
                ease: "power3.inOut",
            },
            "<"
        )
        .to(
            progressNumberRef.current, {
                textContent: "100",
                duration: 7,
                roundProps: "textContent",
            },
            "<"
        )
        .to(progressNumberRef.current, {
            y: 24,
            autoAlpha: 0,
        }, "+=2");

    return tl;
};

function getTranslationValues() {
    const width = window.innerWidth;
    let xOffset, xDiff, yOffset, yDiff, scale;
    if (width >= 1700) {
        // XLarge screens
        xOffset = -40;
        xDiff = 5;

        yOffset = -20;
        yDiff = 13;
        scale = 3;
    } else if (width >= 1024) {
        // Large screens
        xOffset = -25;
        xDiff = -5;

        yOffset = -5;
        yDiff = -5;
        scale = 3;
    } else if (width >= 768) {
        // Tablet screens
        xOffset = -25;
        xDiff = -5;

        yOffset = -5;
        yDiff = -5;
        scale = 3;
    } else {
        // Phone screens
        xOffset = -25;
        xDiff = -5;

        yOffset = -5;
        yDiff = -5;
        scale = 3;
    }

    return { xOffset, xDiff, yOffset, yDiff, scale };
}

function splitTextIntoDivs(parentElement, words) {
    parentElement.innerHTML = ''; // Clear original content

    // Create a div for each word and append to parent
    words.forEach((word, index) => {
        const div = document.createElement('div');
        div.className = `word${index + 1}`; // word1, word2, etc.
        div.textContent = word; // Add the word to the div
        div.style.display = 'inline-block'; // Make the divs appear on one line
        div.style.marginRight = '5px'; // Add a small margin between words
        parentElement.appendChild(div); // Append the div to the parent
    });
}

function animateWordsDifferently() {
    const { xOffset, yOffset, yDiff, scale } = getTranslationValues();

    // First word (Move 1)
    gsap.to('.word1', {
        scale: scale,
        x: xOffset.toString() + 'vh',
        y: yOffset.toString() + 'vh',
        duration: 5,
        ease: 'circ.out',
    });

    // Second word (Move 2) - moves below Move 1
    gsap.to('.word2', {
        scale: scale,
        x: (xOffset + 0).toString() + 'vh',
        y: (yOffset + yDiff).toString() + 'vh',
        duration: 5,
        ease: 'circ.out',
    });

    // Third word (Move 3) - moves below Move 2
    gsap.to('.word3', {
        scale: scale,
        x: (xOffset + 0).toString() + 'vh',
        y: (yOffset + (yDiff) * 2).toString() + 'vh',
        duration: 5,
        ease: 'circ.out',
    });

}

export const changeWelcome = (welcomeRef) => {
    const tl = gsap.timeline();
    tl.to(welcomeRef.current, {
        duration: 3,
        text: {
            value: "click anywhere to continue",
        },
    })

    return tl;
};

export const intro = (welcomeRef) => {
    const tl = gsap.timeline();
    tl.to(welcomeRef.current, {
        duration: 3,
        text: {
            value: "Hi. I'm Faris, a software engineer",
            split: '',
        },
        onComplete: () => {
            // Split the text into separate divs after the initial animation
            splitTextIntoDivs(welcomeRef.current, ["I'm Faris,", "a software", "engineer"]);
            // Animate the words differently
            animateWordsDifferently();
        }
    })
    return tl;
}

export const moveBorder = (progressRef, setTrans) => {
    const tl = gsap.timeline();
    tl.to(progressRef.current, {
            scaleY: 100,
            duration: 4,
            ease: "power3.inOut",
            onComplete: () => {
                setTrans(true);
            }
        })
        .to(progressRef.current, {
            backgroundColor: '#FFFFE4',
            duration: 1,
            ease: 'none',
            stagger: 0.2
        })

    .to(progressRef.current, {
        opacity: 0, // Fade out the element
        duration: 2,
        ease: 'power3.out',
        onComplete: () => {
            progressRef.current.style.display = 'none'; // Hide the element after the animation
        }
    });

    return tl;
};

export const scrollZoom = () => {
    const totalSlides = 4; // Matching the number of slides in the React component
    const sectionHeight = (document.body.scrollHeight - window.innerHeight) / totalSlides;
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {
        gsap.to(slide, {
            zIndex: (progress) => {
                return progress < 0.5 ? 1 : 5 - index;
            },
            scrollTrigger: {
                start: sectionHeight * index + " top",
                end: sectionHeight * (index + 1) + " top",
                scrub: 1,
            },
        });

        // Slide scaling
        gsap.fromTo(
            slide, { scale: index === 0 ? 1 : 0 }, {
                scale: 1,
                scrollTrigger: {
                    start: sectionHeight * index + " top",
                    end: sectionHeight * (index + 1) + " top",
                    scrub: 1,
                },
            }
        );

        // Image scaling
        if (index !== 0) {
            const slideImg = slide.querySelector(".slide-img");
            if (slideImg) {
                gsap.fromTo(
                    slideImg, { scale: 2 }, {
                        scale: 1,
                        top: "0%",
                        scrollTrigger: {
                            start: sectionHeight * index + " top",
                            end: sectionHeight * (index + 1) + " top",
                            scrub: 1,
                        },
                    }
                );
            }
        }
    });
};

export const fadeInAndUp = (element) => {
    const tl = gsap.timeline();
    tl.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0, });
    return tl;
};

export const fadeIn = (element) => {
    const tl = gsap.timeline();
    tl.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' });
    return tl;
};