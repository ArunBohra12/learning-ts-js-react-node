import FunctionComponent from "./funcitonComponent";
import { ThemeProvider } from "./themeContext";

const UseContextHook = () => (
  <ThemeProvider>
    <FunctionComponent />
  </ThemeProvider>
);
export default UseContextHook;
