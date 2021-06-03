import styled from 'styled-components';

export const TimerContainer = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const TimerSVG = styled.svg`
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);
`;

export const TimerBaseRing = styled.circle`
  cx: 100;
  cy: 100;
  stroke-width: 15px;
  stroke: #eee;
  fill: transparent;
`;

export const TimerProgressRing = styled(TimerBaseRing)`
  cursor: pointer;
  stroke: #000;
  ${({ running, remainingDuration }) => running
    ? `transition: stroke-dashoffset ${remainingDuration}s linear`
    : `transition: stroke-dashoffset 0.3s linear`
  }
`;
