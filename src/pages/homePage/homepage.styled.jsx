import styled from "styled-components";

export const Hero = styled.h1`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xl}px;
    color: ${p => p.theme.colors.white};
    text-shadow: 3px 3px 3px  rgba(0, 0, 0, 0.5)
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${p => p.theme.colors.bgndFirst};
  background-image: repeating-radial-gradient(circle, ${p => p.theme.colors.bgndFirst} 0%, ${p => p.theme.colors.bgndSecond} 100%);
`;
