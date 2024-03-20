import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};
const introChildren = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.1, type: "spring" } },
};
const Banner = () => {
  return (
    <div className="relative w-full max-h-screen overflow-hidden">
      <img
        src="https://i.ibb.co/pywhKxc/pexels-marta-wave-6437608.jpg"
        alt="Banner Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col justify-center items-center mt-20"
      >
        <div>
          <motion.h2
            variants={introChildren}
            className="lg:text-7xl text-4xl text-white"
          >
            Wellcome to{" "}
            <span className="block font-bold  text-[#D7E826] uppercase">
              WINTERWardRobe
            </span>
          </motion.h2>
        </div>
        <motion.h1
          variants={introChildren}
          className="text-white mt-4 text-[12px] lg:text-[18px] lg:mt-8"
        >
          Welcome to our winter donation page! We're a passionate team <br />{" "}
          dedicated to making a positive impact during the chilly months.
        </motion.h1>
        <motion.div variants={introChildren}>
          <Button className="bg-[#D7E826] text-black lg:mt-10 mt-2">
            Explore more
            <ArrowRight />
          </Button>
        </motion.div>
        <motion.div variants={introChildren}>
          <img
            src="https://i.ibb.co/6PF5T42/icon.png"
            className="lg:w-80 w-40 mt-2 lg:mt-10"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
