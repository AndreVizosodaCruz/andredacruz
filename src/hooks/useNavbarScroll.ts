import { useEffect, useState, useRef } from "react";

export default function useNavbarScroll() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const threshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastY.current);
      if (diff < threshold) return;
      if (currentY > lastY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return hidden;
}