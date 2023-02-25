import styles from "../style";
import { discount, onebonethd } from "../assets";
import GetStarted from "./GetStarted";
import { useState } from "react";

const Hero = () => {

  const [copied, setCopied] = useState(false);


  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <button onClick={() =>  navigator.clipboard.writeText('1b1t.fun')} className="text-white">{!copied ? "Copy link" : "Copied!"} 1b1t.fun{" "}</button>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> to True</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Anarchy
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-teal-50`}>
          1b1t brings the Anarchy experience of 2b2t and has custom
          biomes so u will never get bored!Also the server will be 
          always at the latest version of Minecraft.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      
      <img src={onebonethd} alt="billing" className="w-[35%] h-[40%] relative z-[5]" />
    
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
