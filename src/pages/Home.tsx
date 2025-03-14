import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import right from "/Right.png";
import left from "/Left.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  scrollPosition.toString();
  useEffect(() => {
    const handleScroll = () => {
      // Obtenez la position de défilement de la page
      setScrollPosition(window.scrollY);
    };

    // Ajoute l'écouteur d'événements pour le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur d'événements à la destruction du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const proRef = useRef(null);
  const maxRef = useRef(null);
  const hasRun = useRef(false);
  const scroller = useRef(null);
  const container = useRef(null);
  const airpodsRef = useRef(null);
  const promaxRef = useRef(null);
  const allnewRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const promaxBoxHeight = 138;
  const promaxBoxWidth = 270;
  const promaxBoxHeightTransition = 46;
  const promaxBoxWidthTransition = 186;

  useEffect(() => {
    if (!hasRun.current) {
      //Pin la page
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: scroller.current,
          start: "top bottom",
          end: "+=5000",
          pin: container.current,
          scrub: 1,
        },
      });

      //Animation #2 AirPods Pro/Max
      gsap.fromTo(
        airpodsRef.current,
        {
          translateY: -60,
          fontSize: 240,
        },
        {
          translateY: -20,
          scrollTrigger: {
            trigger: scroller.current,
            start: "+=3000 bottom",
            end: "+=2000",
            scrub: 1,
          },
        }
      );

      //Animation #1 AirPods Pro/Max
      gsap.fromTo(
        airpodsRef.current,
        {
          translateX: 0,
          translateY: -200,
          fontSize: 180,
        },
        {
          translateX: 22,
          translateY: -60,
          fontSize: 240,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Animation #2 Pro
      gsap.to(proRef.current, {
        translateY: -1 * promaxBoxHeight - promaxBoxHeightTransition,
        scrollTrigger: {
          trigger: scroller.current,
          start: "+=3000 bottom",
          end: "+=2000",
          scrub: 1,
        },
      });

      //Animation #1 Pro
      gsap.fromTo(
        proRef.current,
        {
          height: promaxBoxHeight,
          fontSize: 180,
        },
        {
          height: promaxBoxHeight + promaxBoxHeightTransition,
          fontSize: 240,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Animation #2 Max
      gsap.to(maxRef.current, {
        translateY: -1 * promaxBoxHeight - promaxBoxHeightTransition,
        scrollTrigger: {
          trigger: scroller.current,
          start: "+=3000 bottom",
          end: "+=2000",
          scrub: 1,
        },
      });

      //Animation #1 Max
      gsap.fromTo(
        maxRef.current,
        {
          height: promaxBoxHeight,
          fontSize: 180,
        },
        {
          height: promaxBoxHeight + promaxBoxHeightTransition,
          fontSize: 240,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Animation #1 ProMax
      gsap.fromTo(
        promaxRef.current,
        {
          height: promaxBoxHeight,
          width: promaxBoxWidth,
        },
        {
          height: promaxBoxHeight + promaxBoxHeightTransition,
          width: promaxBoxWidth + promaxBoxWidthTransition,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Animation #2 All-New
      gsap.fromTo(
        allnewRef.current,
        {
          translateY: -70,
        },
        {
          translateY: 0,
          scrollTrigger: {
            trigger: scroller.current,
            start: "+=3000 bottom",
            end: "+=2000",
            scrub: 1,
          },
        }
      );

      //Animation #1 All-New
      gsap.fromTo(
        allnewRef.current,
        {
          translateY: -155,
        },
        {
          translateY: -70,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Animation #2 right
      gsap.fromTo(
        rightRef.current,
        {
          scale: 0.6,
          bottom: 385,
          right: 250,
          rotate: 45,
        },
        {
          scale: 1.2,
          bottom: -80,
          right: -200,
          rotate: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: scroller.current,
            start: "+=3000 bottom",
            end: "+=2000",
            scrub: 1,
          },
        }
      );

      //Animation #1 right
      gsap.fromTo(
        rightRef.current,
        {
          scale: 1.2,
          bottom: -80,
          right: -200,
          rotate: 0,
        },
        {
          scale: 0.6,
          bottom: 385,
          right: 250,
          rotate: 45,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      hasRun.current = true;
    }
  }, []);

  return (
    <>
      <div
        ref={container}
        className="flex flex-col h-screen justify-center items-center w-full text-white top-[100px]"
      >
        <p
          ref={allnewRef}
          className="text-[var(--green)] text-center text-[32px]"
        >
          All New
        </p>
        <div ref={airpodsRef} className="flex items-center justify-center ">
          <p className="pr-[20px] font-semibold">AirPods</p>
          <div ref={promaxRef} className="overflow-hidden ">
            <div className="flex flex-col">
              <div
                ref={proRef}
                className="flex items-center justify-start font-semibold"
              >
                Pro
              </div>
              <div
                ref={maxRef}
                className="flex items-center justify-start font-semibold"
              >
                Max
              </div>
            </div>
          </div>
        </div>
        <img ref={leftRef} className="fixed" src={left} />
        <img ref={rightRef} className="fixed -z-50" src={right} />
      </div>
      <div ref={scroller} className="h-[5001px] bg-black"></div>
    </>
  );
}

export default Home;
