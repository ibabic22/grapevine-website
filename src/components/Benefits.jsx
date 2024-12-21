import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Grapevine"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] opacity-80 transition-opacity hover:opacity-100"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="flex items-center mb-5">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <h5 className="h5 ml-5">{item.title}</h5>
                </div>

                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10"> */}
                {/* {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )} */}
                {/* </div> */}
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
