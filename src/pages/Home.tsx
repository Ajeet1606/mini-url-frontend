import { useRef } from "react";
import Shortner from "../components/Shortner";

const Home = () => {
  const inputRef = useRef<HTMLDivElement>(null)

  function handleGetStarted() {
    if(inputRef && inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="md:h-[91vh] font-montserrat p-10 flex flex-col justify-center gap-8">
        <h3 className="text-xl md:text-4xl font-black md:w-1/2 leading-normal">
          Simplify Your Links, Amplify Your <span className="text-red-500">Reach</span>
        </h3>
        <p className="text-base md:text-2xl text-gray-600 font-semibold md:w-2/3">
          Enhance your digital presence with miniUrl's efficient URL shortener.
          Shorten, share, and track your links effortlessly. Experience the
          power of concise links and real-time analytics with miniUrl.
        </p>
        <button className="bg-red-500 text-white font-bold py-3 md:py-4 px-4 rounded md:w-48 mt-2" onClick={handleGetStarted}>Get Started</button>
      </div>

      <Shortner inputRef = {inputRef}/>
    </>
  );
};

export default Home;
