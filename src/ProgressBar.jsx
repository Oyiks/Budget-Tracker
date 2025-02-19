import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateProgress } from './progress';


function ProgressBar(props) {
  const SVG = styled.svg`
    display: block;
    margin: 20px auto;
    max-width: 100%;
  `;


  const SvgCircleBg = styled.circle`
    fill: none;
  `;

  const SvgCircle = styled.circle`
    fill: none;
    stroke-linecap: round;
  `;

  const TEXT = styled.text`
    font-size: 2rem;
    text-anchor: middle;
    font-weight: normal;
  `;

  const SPAN = styled.span`
    display: block;
    font-size: 1rem;
  `;

  let {
    size,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  circleTwoStroke = '#51D289';

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // Select income and expenses from Redux store
  const income = useSelector((state) => state.income.income);
  const amount = useSelector((state) => state.amount.amount);
  // const expenses = useSelector((state) => state.expenses);

  // Calculate progress
  const dispatch = useDispatch();
  const progress = ((income - amount) / income) * 100;

  const strokeDashoffset = circumference - (progress / 100) * circumference;
  console.log("strokeDashoffset:", strokeDashoffset);

  const handleUpdateProgress = (progressAmount) => {
    dispatch(updateProgress(progressAmount))
  };

  handleUpdateProgress(progress);

  return (
    <>
      <SVG width={size} height={size}>
        <SvgCircleBg
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <SvgCircle
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />

        <TEXT x={center} y={center}>
          {handleUpdateProgress}
          {Math.round(progress)}% {/* Rounded progress */}
          <SPAN>SPENT</SPAN>
        </TEXT>
      </SVG>
    </>
  );
}

ProgressBar.defaultProps = {
  size: 150,
  strokeWidth: 10,
  circleOneStroke: "#e6e6e6",
  circleTwoStroke: "#4caf50",
};

export default ProgressBar;