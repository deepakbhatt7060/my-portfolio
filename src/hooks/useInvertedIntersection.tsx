import { useEffect, useState, useRef } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useInvertedIntersection = (
  options: Options = { root: null, rootMargin: "0px", threshold: 0 }
) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(!entry.isIntersecting);
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, [options]);

  return { triggerRef, intersecting };
};

export default useInvertedIntersection;
