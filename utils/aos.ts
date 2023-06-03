// utils/aos.ts
import AOS from "aos";
import "aos/dist/aos.css";

const initializeAOS = (): void => {
  AOS.init({
    delay: 100 || "100", // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: "linear", // default easing for AOS animations
  });
};

export default initializeAOS;
