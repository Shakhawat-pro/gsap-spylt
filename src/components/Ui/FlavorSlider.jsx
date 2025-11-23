"use client";
import { flavorlists } from "@/consts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
  const flavorsRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {

    const getScrollAmount = () => {
      if (!flavorsRef.current) return 0;
      return flavorsRef.current.scrollWidth - window.innerWidth + 1000;
    };

    if (!isTablet) {

      gsap.set(flavorsRef.current, { willChange: "transform" });

      gsap.to([flavorsRef.current, ".flavor-title-wrapper"], {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    titleTl
      .to(".first-text-split", { xPercent: -30, ease: "none" })
      .to(".flavor-text-scroll", { xPercent: -22, ease: "none" }, "<")
      .to(".second-text-split", { xPercent: -10, ease: "none" }, "<");

 
  });

  return (
    <div className="slider-wrapper">
      <div ref={flavorsRef} className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative overflow-hidden z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              fill
              priority
              className="object-contain absolute bottom-0"
            />
            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              width={600}
              height={900}
              priority
              className="absolute left-1/2 -translate-x-1/2 bottom-0 md:h-full h-80 w-auto max-w-[55%] object-contain drinks"
            />
            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              fill
              priority
              className="object-contain elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
