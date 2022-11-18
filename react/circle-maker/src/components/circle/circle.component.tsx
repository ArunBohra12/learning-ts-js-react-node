import './circle.styles.css';

type CircleProps = {
  pos: {
    x: number;
    y: number;
  };
};

const Circle = ({ pos }: CircleProps): JSX.Element => {
  const circleStyles: React.CSSProperties = {
    position: 'absolute',
    left: `${pos.x}px`,
    top: `${pos.y}px`,
  };

  return <div className='circle' style={circleStyles}></div>;
};

export default Circle;
