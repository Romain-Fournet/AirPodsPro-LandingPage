import { useEffect, useRef, useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const AirPodsPro = useRef(null);
  const AllNew = useRef(null);
  const scroller = useRef(null);
  const hasRun = useRef(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  useEffect(() => {
    if (!hasRun.current) {
      //Animation #2 AirPods Pro
      gsap.fromTo(
        AirPodsPro.current,
        {
          translateY: -60,
          fontSize: 250,
        },
        {
          translateY: -20,
          scrollTrigger: {
            trigger: scroller.current,
            start: "+=3000 bottom",
            end: "+=2000",
            scrub: 1,
            markers: true,
          },
        }
      );

      //Animation #1 AirPods Pro
      gsap.fromTo(
        AirPodsPro.current,
        {
          translateY: -100,
          fontSize: 190,
        },
        {
          translateY: -60,
          fontSize: 250,
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
        AllNew.current,
        {
          translateY: -40,
        },
        {
          translateY: 70,
          scrollTrigger: {
            trigger: scroller.current,
            start: "+=3000 bottom",
            end: "+=5000",
            scrub: 1,
          },
        }
      );

      //Animation #1 All-New
      gsap.fromTo(
        AllNew.current,
        {
          translateY: -60,
        },
        {
          translateY: -50,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 1,
          },
        }
      );

      //Pin AirPods Pro sur toute la longueur
      ScrollTrigger.create({
        trigger: scroller.current,
        start: "top bottom",
        end: "+=5000",
        pin: AirPodsPro.current,
      });

      //Pin All-New Pro sur toute la longueur
      ScrollTrigger.create({
        trigger: scroller.current,
        start: "top bottom",
        end: "+=5000",
        pin: AllNew.current,
      });

      hasRun.current = true;
    }
  }, []);

  return (
    <>
      <NavBar />
      {/*<p className="text-amber-700 fixed top-0 left-0">{scrollPosition}</p>*/}
      <div className="flex flex-col min-h-screen">
        <div className="mt-[100px] flex flex-1 flex-col h-screen justify-center">
          <p
            ref={AllNew}
            className="text-[var(--green)] text-center text-[48px] translate-y-[-60px]"
          >
            All-New
          </p>
          <h1
            className="text-[190px] font-semibold text-white text-center translate-y-[-60px]"
            ref={AirPodsPro}
          >
            Airpods Pro
          </h1>
        </div>
      </div>
      <div ref={scroller} className="h-[5001px]"></div>
    </>
  );
}

export default App;
