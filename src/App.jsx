import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Main />
        <Benefits />
        <HowToUse />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
