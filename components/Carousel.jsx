"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel = () => {
  return (
    <div className="bg-neutral-800">
     
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[950px] w-[1050px] overflow-hidden bg-neutral-200 border"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-black backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "1.jpg",
    title: "Chat",
    id: 1,
  },
  {
    url: "2.jpg",
    title: "Explore",
    id: 2,
  },
  {
    url: "3.png",
    title: "Communicate",
    id: 3,
  },
  {
    url: "4.jpg",
    title: "Share interest",
    id: 4,
  },
  {
    url: "5.jpg",
    title: "create rooms",
    id: 5,
  },
  {
    url: "6.jpg",
    title: "Video call",
    id: 6,
  },
  {
    url: "7.jpg",
    title: "Meet",
    id: 7,
  },
];