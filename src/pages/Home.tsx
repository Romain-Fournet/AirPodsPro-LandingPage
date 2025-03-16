import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import right from "/Right.png";
import left from "/Left.png";
import headphone from "/HeadPhone.png";

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
  const mm = gsap.matchMedia();

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
  const headphoneRef = useRef<HTMLImageElement>(null);

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
          end: "+=10000",
          pin: container.current,
          scrub: 1,
        },
      });

      //Ecran de telephone
      mm.add("(max-width: 760px)", () => {
        //Animation #2 AirPods Pro/Max
        gsap.fromTo(
          airpodsRef.current,
          {
            top: 300,
            fontSize: 60,
          },
          {
            top: 350,
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
            top: 200,
            fontSize: 50,
          },
          {
            translateX: 22,
            top: 300,
            fontSize: 60,
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
          translateY: -1 * 50 - 10,
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
            height: 50,
            fontSize: 50,
          },
          {
            height: 50 + 10,
            fontSize: 60,
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
          translateY: -1 * 50 - 10,
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
            height: 50,
            fontSize: 50,
          },
          {
            height: 50 + 10,
            fontSize: 60,
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
            height: 50,
            width: 82,
          },
          {
            height: 50 + 10,
            width: 82 + 38,
            scrollTrigger: {
              trigger: scroller.current,
              start: "top bottom",
              end: "+=1000",
              scrub: 1,
            },
          }
        );
      });

      //Ecran de tablette
      mm.add("(max-width: 1024px) and (min-width: 761px)", () => {
        //Animation #2 AirPods Pro/Max
        gsap.fromTo(
          airpodsRef.current,
          {
            top: 300,
            fontSize: 120,
          },
          {
            top: 350,
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
            top: 200,
            fontSize: 100,
          },
          {
            translateX: 22,
            top: 300,
            fontSize: 120,
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
          translateY: -1 * 80 - 20,
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
            height: 80,
            fontSize: 100,
          },
          {
            height: 80 + 20,
            fontSize: 120,
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
          translateY: -1 * 80 - 20,
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
            height: 80,
            fontSize: 100,
          },
          {
            height: 80 + 20,
            fontSize: 120,
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
            height: 80,
            width: 155,
          },
          {
            height: 80 + 20,
            width: 215 + 20,
            scrollTrigger: {
              trigger: scroller.current,
              start: "top bottom",
              end: "+=1000",
              scrub: 1,
            },
          }
        );
      });

      //Ecran de pc
      mm.add("(max-width: 1920px) and (min-width: 1025px)", () => {
        //Animation #2 AirPods Pro/Max
        gsap.fromTo(
          airpodsRef.current,
          {
            top: 300,
            fontSize: 170,
          },
          {
            top: 350,
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
            top: 200,
            fontSize: 140,
          },
          {
            translateX: 22,
            top: 300,
            fontSize: 170,
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
          translateY: -1 * 120 - 50,
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
            height: 120,
            fontSize: 140,
          },
          {
            height: 120 + 50,
            fontSize: 170,
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
          translateY: -1 * 120 - 50,
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
            height: 120,
            fontSize: 140,
          },
          {
            height: 120 + 50,
            fontSize: 170,
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
            height: 120,
            width: 215,
          },
          {
            height: 120 + 50,
            width: 215 + 110,
            scrollTrigger: {
              trigger: scroller.current,
              start: "top bottom",
              end: "+=1000",
              scrub: 1,
            },
          }
        );
      });

      //Ecran ultrawide
      mm.add("(min-width: 1921px)", () => {
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

        //Animation #2 left
        gsap.fromTo(
          leftRef.current,
          {
            scale: 0.6,
            bottom: 425,
            left: 210,
            rotate: -58,
          },
          {
            scale: 1.2,
            bottom: -60,
            left: -350,
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

        //Animation #1 left
        gsap.fromTo(
          leftRef.current,
          {
            scale: 1.2,
            bottom: -60,
            left: -350,
            rotate: 0,
          },
          {
            scale: 0.6,
            bottom: 425,
            left: 210,
            rotate: -58,
            scrollTrigger: {
              trigger: scroller.current,
              start: "top bottom",
              end: "+=1000",
              scrub: 1,
            },
          }
        );

        //Animation #1 headphones
        if (headphoneRef.current) {
          gsap.fromTo(
            headphoneRef.current,
            {
              bottom: -480,
              rotate: 90,
            },
            {
              bottom: 220,
              rotate: 0,
              scrollTrigger: {
                trigger: scroller.current,
                start: "+=3000 bottom",
                end: "+=2000",
                scrub: 1,
              },
            }
          );
        }
      });

      hasRun.current = true;
    }
  }, []);

  return (
    <>
      <div
        ref={container}
        className="flex flex-col h-screen justify-center items-center w-full text-white top-[100px] max-w[2000px]"
      >
        {/*<p
          ref={allnewRef}
          className="text-[var(--green)] text-center text-[32px]"
        >
          All New
        </p>*/}
        <div
          ref={airpodsRef}
          className="flex fixed items-center justify-center "
        >
          <p className="pr-[20px] font-semibold">AirPods</p>
          <div ref={promaxRef} className="overflow-hidden">
            <div className="flex flex-col">
              <div
                ref={proRef}
                className="flex items-center justify-start font-semibold text-[#D9D9D9]"
              >
                Pro
              </div>
              <div
                ref={maxRef}
                className="flex items-center justify-start font-semibold text-[#D9D9D9]"
              >
                Max
              </div>
            </div>
          </div>
        </div>
        {/*
        <img ref={leftRef} className="fixed" src={left} />
        <img ref={rightRef} className="fixed -z-50" src={right} />
        <img ref={headphoneRef} className="fixed" src={headphone} />*/}
      </div>
      <div ref={scroller} className="h-[5001px] bg-black"></div>
    </>
  );
}

export default Home;
