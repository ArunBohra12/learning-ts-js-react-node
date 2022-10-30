import { useEffect } from "react";
import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("CALLING SLOW FUNCTION...");
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prev) => !prev)}>change theme</button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoHook;
