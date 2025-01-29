import "./App.css";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";

function App() {
  return (
    <>
      <HeroSection />

      <Heading
        subtext={
          "Find the best master for your company and boosts your business 10x!"
        }
        lineheight={64}
        paddingBlock="30px"
      >
        Discover the
        <br />
        Emerging Masters.
      </Heading>

      <TabSection />
    </>
  );
}

export default App;
