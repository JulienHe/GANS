import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const circleSize = '100px';
const animationDelayBase = 0.1;

export const circleMovement = keyframes`
  0% { transform: rotate(0);}
  25% { transform: rotate(0);}
  75% { transform: rotate(360deg);}
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.section`
  display: flex;
  justify-content: center;
  min-height: 340px;
  padding: 16px;
  position: relative;
`;

const LoadingCircle = styled.span`
  display: inline-block;
  height: ${circleSize};
  width: ${circleSize};
  border-radius: 50%;
  position: absolute;
  animation: ${circleMovement} 3s ease-in-out infinite;
  transform-origin: center -50px;
  mix-blend-mode: multiply;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  animation-delay: ${animationDelayBase * 1}s;
  &:nth-child(2) {
    background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
    animation-delay: ${animationDelayBase * 2}s;
	}
	&:nth-child(3) {
		background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
    animation-delay: ${animationDelayBase * 3}s;
	}
	&:nth-child(4) {
		background-image: linear-gradient(-60deg, #abecd6 0%, #fbed96 100%);
    animation-delay: ${animationDelayBase * 4}s;
	}
	&:nth-child(5) {
		background-image: linear-gradient(to bottom, #96fbc4 0%, #f9f586 100%);
    animation-delay: ${animationDelayBase * 5}s;
	}
	&:nth-child(6) {
		background-image: linear-gradient(225deg, #20E2D7 0%, #F9FEA5 100%);
    animation-delay: ${animationDelayBase * 6}s;
	}
	&:nth-child(7) {
		background-image: linear-gradient(225deg, #B7F8DB 0%, #50A7C2 100%);
    animation-delay: ${animationDelayBase * 7}s;
	}
	&:nth-child(8) {
		background-image: linear-gradient(-30deg, #007adf 0%, #00ecbc 100%);
    animation-delay: ${animationDelayBase * 8}s;
	}
	&:nth-child(9) {
		background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
    animation-delay: ${animationDelayBase * 9}s;
	}
	&:nth-child(10) {
		background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
    animation-delay: ${animationDelayBase * 10}s;
	}
	&:nth-child(11) {
		background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
    animation-delay: ${animationDelayBase * 11}s;
	}
	&:nth-child(12) {
		background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);
    animation-delay: ${animationDelayBase * 12}s;
	}
`;

const LoadingContent = styled.div`
  position: absolute;
  top: calc(50% + (${circleSize} / 2));
	left: calc(50% - (${circleSize} / 2));
	transform: translate(-50%, 0);
`;

class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <LoadingContent>
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
        </LoadingContent>
      </LoadingContainer>
    );
  }
}

export default Loading;
