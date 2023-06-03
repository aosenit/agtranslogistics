"use client";

import { useEffect } from "react";
import initializeAOS from "../utils/aos";

const useAos = () => {
  useEffect(() => {
    initializeAOS();
  }, []);
};

export default useAos;
