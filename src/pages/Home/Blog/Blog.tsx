import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useEffect } from "react";
const intro = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const Blog = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.getElementById("blog-content");
      if (element) {
        element.classList.add("animate");
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <motion.div className="px-6 md:px-0">
      <Title title={"Frequently Asked Questions"}></Title>
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="max-w-[800px] mx-auto text-black"
      >
        <Accordion
          type="single"
          collapsible
          className="bg-[#D7E826] rounded-xl p-4 "
        >
          <AccordionItem value="item-1 ">
            <AccordionTrigger>
              What types of winter clothing items does WINTERWardRobe accept?
            </AccordionTrigger>
            <AccordionContent>
              WINTERWardRobe accepts a wide range of winter clothing items
              including coats, jackets, sweaters, scarves, gloves, hats, thermal
              wear, and boots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Are there any specific requirements for donating winter clothing?
            </AccordionTrigger>
            <AccordionContent>
              While we appreciate all donations, we kindly ask that all items be
              clean, gently used, and in good condition. This ensures that those
              receiving the clothing can stay warm and comfortable during the
              winter months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I donate winter clothing to WINTERWardRobe?
            </AccordionTrigger>
            <AccordionContent>
              Donating winter clothing to WINTERWardRobe is easy! You can drop
              off your donations at any of our designated collection points or
              schedule a pickup by contacting us directly through our website or
              phone number.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does WINTERWardRobe accept monetary donations?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we do accept monetary donations to help cover operational
              costs such as storage, transportation, and distribution of winter
              clothing items. You can make a donation through our website or by
              contacting us directly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What happens to the winter clothing donations once they are
              received?
            </AccordionTrigger>
            <AccordionContent>
              Once we receive winter clothing donations, they are sorted,
              cleaned if necessary, and organized. These items are then
              distributed to individuals and families in need through various
              channels such as shelters, community centers, and outreach
              programs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
