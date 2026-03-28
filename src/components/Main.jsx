import { useEffect, useRef } from "react";
import { grapevideo } from "../assets";

import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Main";

const Main = () => {
  const parallaxRef = useRef(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Increase the playback speed
    }
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Comments Section for Every URL on the Web with&nbsp;
            {` `}
            <span className="inline-block relative">Grapevine </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            With our extension, you can easily comment on any URL on the web,
            from news articles to blog posts, and even social media pages.{" "}
            <br />
            Join the conversation, share your insights and connect with others
            directly from your browser.
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://chromewebstore.google.com/detail/grapevine/pplalkgaganjjijekcoikebmnjfdhfbf",
                "_blank",
              )
            }
            white
          >
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:pb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-smooth-gradient">
            <div className="relative z-1 p-[1px] rounded-2xl bg-smooth-gradient">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-auto">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    src={grapevideo}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Main;
