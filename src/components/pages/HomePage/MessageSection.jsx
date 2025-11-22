"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const MessageSection = () => {

    useGSAP(() => {
        const firstMessageSplit = SplitText.create(".first-message", {
            type: "words",
        });
        const secondMessageSplit = SplitText.create(".second-message", {
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words chars",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMessageSplit.words, {
            color: "#faeade",
            ease: "power1.inOut",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "20% top",
                scrub: true,
            }
        });
        gsap.to(secondMessageSplit.words, {
            color: "#faeade",
            ease: "power1.inOut",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "center center",
                end: "80% center",
                scrub: true,
            }
        });

        const revealTl = gsap.timeline({
            delay: 0.2,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top center",
                end: "bottom 30%",
                scrub: true,
            }
        });
        revealTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
        });
        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: paragraphSplit.words,
                start: "top 40%",
            }
        });

        paragraphTl.from(paragraphSplit.chars, {
            yPercent: 300,
            rotate: 3,
            stagger: 0.01,
            ease: "power2.out",
        });

    }, []);

    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">Stir up your fearless past and</h1>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="msg-text-scroll"
                        >
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className="text-red-brown">Fuel Up</h2>
                            </div>
                        </div>

                        <h1 className="second-message">
                            your future with every gulp of Perfect Protein
                        </h1>
                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>
                                Rev up your rebel spirit and feed the adventure of life with
                                SPYLT, where you’re one chug away from epic nostalgia and
                                fearless fun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;