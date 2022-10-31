import UseContextHook from "./useContext/context";
import UseRefHook from "./useRef/Ref";
import UseMemoHook from "./useMemo/useMemo";
import UseCallbackHook from "./useCallback/useCallback";
import UseReducerHook from "./useReducer/useReducerHook";
import CustomHooks from "./custom/custom";
import "./App.css";

function App() {
  return (
    <>
      {/* <UseContextHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseReducerHook /> */}
      <CustomHooks />
    </>
  );
}

export default App;
