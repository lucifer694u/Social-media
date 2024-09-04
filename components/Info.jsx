import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col items-start   bg-[#bdda57]">
      <div
        className="flex gap-4 justify-center pl-10  mt-20"
        style={{ fontFamily: "var(--font-Bebas_Neue)" }}
      >
        <h1
          className="uppercase text-7xl text-[21vh] font-extrabold text-[#f8f9f5] m-0"
          style={{ fontFamily: "var(--font-Bebas_Neue)" }}
        >
          How it
          <br />
          works
        </h1>
        <h1
          className="uppercase font-extrabold text-white   -rotate-90 text-[7vh]  relative mb-4"
          style={{
            fontFamily: "var(--font-Bebas_Neue)",
          }}
        >
          How it works
        </h1>
      </div>

      <p
        className="text-5xl font-extralight w-[80%] pl-10 text-left  mt-4 tracking-wider leading-snug"
        style={{ fontFamily: "var(--font-Bebas_Neue)" }}
      >
        Connect and Engage with Ease: Our platform allows you to{" "}
        <span className="underline">post updates</span> , chat with{" "}
        <span className="underline">friends</span> , and create{" "}
        <span className="underline">dedicated rooms</span> for your interests.
        Experience{" "}
        <span className="underline">seamless social interaction</span> and stay
        connected with your community.
      </p>
      <hr
        style={{ borderTop: "1px solid gray", width: "100%", margin: "1rem 0" }}
        className=""
      />

      <div className="flex justify-between w-full px-4 mb-[10rem]">
        <div className="text-2xl">
          <h1 className="pl-10 font-medium">What you can expect :</h1>
        </div>
        <div className="w-[40%] text-2xl font-light">
          <p className="w-[50%] mb-10">
            As a user, I expect an intuitive and engaging experience that allows
            me to effortlessly share my thoughts, updates, and interests with
            others.
          </p>
          <p className="w-[50%]">
            A clean, modern interface with responsive design ensures I can stay
            connected whether I'm on my desktop, tablet, or smartphone.
          </p>
        </div>
      </div>
   

    </div>
  );
};

export default Info;
