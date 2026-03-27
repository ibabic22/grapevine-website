import Button from "./Button";
import Section from "./Section";

const CTA = () => {
  return (
    <Section crosses id="cta">
      <div className="container relative z-2 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="h2 mb-6">Ready to Start Commenting?</h2>

          <p className="body-1 max-w-2xl mx-auto mb-8 text-n-2">
            Download Grapevine now and join thousands of users sharing their
            voices across the web. Comment on your favorite sites today.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/grapevine/pplalkgaganjjijekcoikebmnjfdhfbf",
                  "_blank",
                )
              }
              white
            >
              Download Now
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("faq")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
