import styled from "styled-components"

function ProgressBar(props) {
    const SVG = styled.svg`
    display: block;
    margin: 20px auto;
    max-width: 100%;
  `

  const SvgCircleBg = styled.circle`
    fill: none;
  `
  const SvgCircle = styled.circle`
    fill: none;
  `
  const TEXT = styled.text`
    font-size: 2rem;
    text-anchor: middle;
    /* fill: #fff; */
    font-weight: normal;
  `
  const SPAN = styled.span`
    display: block;
  `

  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  const center = size /2;
  const radius = size / 2 - strokeWidth / 2;

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
          />

          <TEXT x={center} y={center}>
            {progress}%
            <SPAN>SPENT</SPAN>
          </TEXT>
       </SVG>

        </>
    )
}

export default ProgressBar
