import { useRef, useEffect, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      {/* Should really avoid to use ref in JSX */}
      <div>My previous name was {inputRef.current}</div>
    </>
  );
};

export default UseRefHook;
