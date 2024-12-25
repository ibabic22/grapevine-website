import { check, grapevineImage } from "../assets";
import { collabContent, collabDescription } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Lorem Ipsum is not simply random text
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button
            onClick={() =>
              window.open(
                "https://chromewebstore.google.com/detail/grapevine/pplalkgaganjjijekcoikebmnjfdhfbf",
                "_blank"
              )
            }
          >
            Try it now
          </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] md:mt-0 sm:mt-0 mt-14">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:mx-auto">
            {collabDescription}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="">
              <div className="">
                <img src={grapevineImage} alt="grapevine" />
              </div>
            </div>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
