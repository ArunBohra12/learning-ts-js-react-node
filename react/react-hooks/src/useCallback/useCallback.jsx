import { useCallback } from "react";
import { useState } from "react";
import List from './list';

const UseCallbackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => [number, number + 1, number + 2], [number]);

  const theme = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>

      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackHook;
