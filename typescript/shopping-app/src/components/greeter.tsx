interface GreeterProps {
  personName: string;
}

const Greeter = ({ personName }: GreeterProps): JSX.Element => {
  return <h1>Hello, {personName}</h1>;
};

export default Greeter;
