import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                target="_blank"
                className="cursor-pointer"
                href="https://github.com/ayusshhhraj0506/Frontend-Fun-Pack-50-Mini-Creations"
              >
                {' '}
                <img src="/images/project1.png" alt="project" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                A Showcase of 50 Interactive Frontend Projects Built Using
                JavaScript and CSS
              </h2>
              <p className="text-white-50 md:text-xl">
                This website contains 50 mini projects, including buttons,
                navbars, forms, and interactive web apps like water tracker,
                movie app, pokédex, drawing board and many more to explore.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href="https://macbook-gsap-zeta.vercel.app/"
                >
                  <img src="/images/project2.png" alt="project" />
                </a>
              </div>
              <h2>MacBook M4 Landing Page Clone</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href="https://ayusshhhraj0506.github.io/translator-app/"
                >
                  <img src="/images/project3.png" alt="project" />
                </a>
              </div>
              <h2>Language Translator App</h2>
            </div>
          </div>
        </div>

        {/* 2nd section */}
        <div className="showcaselayout mt-10">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper bg-[#ccccd0] rounded-xl">
              <a
                target="_blank"
                className="cursor-pointer"
                href="https://ayusshhhraj0506.github.io/code-hive/"
              >
                <img src="/images/project4.png" alt="project" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                A Basic Frontend Code Editor with Real Time HTML, CSS, and
                JavaScript Output.
              </h2>
              <p className="text-white-50 md:text-xl">
                A live coding playground for experimenting with HTML, CSS, and
                JavaScript. It also includes a live preview of the code output.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#bfccfa]">
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href="https://ayusshhhraj0506.github.io/sundown_studio/"
                >
                  <img src="/images/project5.png" alt="project5" />
                </a>
              </div>
              <h2>Interior Designing Studio Homepage</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#fffbce]">
                <a
                  target="_blank"
                  className="cursor-pointer"
                  href="https://ayusshhhraj0506.github.io/Vortex_LandingPage/"
                >
                  <img src="/images/project6.png" alt="project" />
                </a>
              </div>
              <h2>Startup Company Website Design</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
