import * as React from "react";
import { SlideView, Slide } from "./Slide";
import { useMousetrap } from "./useMousetrap";

export type SlideShow = {
  initialIndex: number;
  slides: ReadonlyArray<Slide>;
};
export const SlideShowView: React.FC<SlideShow> = ({
  initialIndex,
  slides
}) => {
  const index = useSlideShowController(initialIndex, slides.length);

  return slides.length > 0 ? <SlideView {...slides[index]} /> : null;
};

function useSlideShowController(initialIndex: number, maxIndex: number) {
  const [index, setIndex] = React.useState(initialIndex || 0);

  useMousetrap({
    next: () => (index < maxIndex - 1 ? setIndex(index + 1) : () => {}),
    prev: () => (index > 0 ? setIndex(index - 1) : () => {})
  });

  return index;
}
