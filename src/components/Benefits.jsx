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

        <div className="flex flex-wrap gap-10">
          {benefits.map((item) => (
            <div
              className="relative block p-0.5 md:max-w-[24rem] opacity-80 transition-opacity hover:opacity-100"
              key={item.id}
            >
              <div className="absolute z-2 inset-0 rounded-[10%] bg-gradient-to-b from-[#8762EA] to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 rounded-[10%] bg-gradient-to-t from-[#26242C] to-transparent pointer-events-none"></div>

              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-[#0E0C15] rounded-[10%] overflow-hidden">
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
                className="absolute inset-0.5 bg-n-8 rounded-[10%]"
                style={{ clipPath: "url(#benefits)" }}
              ></div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
