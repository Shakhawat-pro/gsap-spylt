"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";



const HeroSection = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars",
        })
        const tl = gsap.timeline({
            delay: 0.2,
        });

        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
        })
            .to(".hero-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out",
            }, "-=0.5")
            .from(titleSplit.chars, {
                yPercent: 200,
                stagger: 0.03,
                ease: "power2.out",
            }, "-=1");

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,

            }
        })

        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.85,
            yPercent: 20,
            ease: "power2.inOut",
        })

    }, []);


    return (
        <section className="bg-main-bg overflow-hidden">
            <div className="hero-container">
                <Image
                    unoptimized
                    src={"/images/static-img.png"}
                    alt="hero-image"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2  w-full scale-100  "
                    width={0}
                    height={0}
                />
                <div className="hero-content">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>
                    <div
                        className="hero-text-scroll"
                        style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }}>
                        <div className="hero-subtitle">
                            <h1>Protein + Caffeine</h1>
                        </div>
                    </div>
                    <h2>
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace
                        your inner kid with every deliciously smooth chug.
                    </h2>

                    <div className="hero-button">
                        <p>Chug a SPYLT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;