import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    margin: auto;
    margin-top: 40px;
    width: 120px;
    text-align: center;
    height: 120px;
    -webkit-animation: ${Spin} 2s linear infinite;
    animation: ${Spin} 2s linear infinite;
`;

