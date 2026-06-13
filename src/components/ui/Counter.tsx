import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  time : number;
  inc : number;
}

const Counter = ({ target,time,inc }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + inc;
      });
    }, time);

    return () => clearInterval(timer);
  }, [target]);

  return <h2>{count}+</h2>;
};

export default Counter;