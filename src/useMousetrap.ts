import * as React from "react";
import * as Mousetrap from "mousetrap";

type Options = {
  next: () => void;
  prev: () => void;
};
export function useMousetrap(options: Options) {
  const { next, prev } = options;
  React.useEffect(() => {
    Mousetrap.bind("right", next);
    Mousetrap.bind("left", prev);
  }, [next, prev]);
}
