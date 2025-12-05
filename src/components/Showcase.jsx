import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null); // ADD THIS

    useGSAP(
        () => {
            if (!isTablet) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                    },
                });

                timeline
                    .to('.mask img', { scale: 1.1 })
                    .to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
            }
        },
        { scope: sectionRef, dependencies: [isTablet] }
    );

    return (
        <section id="showcase" ref={sectionRef}>
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    ...
                </div>
            </div>
        </section>
    );
};

export default Showcase;