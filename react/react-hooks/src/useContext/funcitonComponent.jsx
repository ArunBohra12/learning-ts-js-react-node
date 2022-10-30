import { useTheme, useUpdateTheme } from "./themeContext";

const FunctionComponent = () => {
  const theme = useTheme();
  const toggleTheme = useUpdateTheme();

  const styles = {
    background: theme,
    color: "white",
    margin: "2rem",
    padding: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={styles}>
        <p>Function component</p>
      </div>
    </>
  );
};

export default FunctionComponent;
