import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 100%;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  background: ${p => p.theme.colors.bgndFirst};
  background-image: repeating-radial-gradient(circle, ${p => p.theme.colors.bgndFirst} 0%, ${p => p.theme.colors.bgndSecond} 100%);

`;
export const Header = styled.p`
  margin: 5px 0 30px 0;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: 700;
  color: ${p => p.theme.colors.white};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const AddButton = styled.button`
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  display: block;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: ${p => p.theme.colors.headerBgnd};
  border-radius: ${p => p.theme.radii.normal}px;
  :hover,
  :focus {
    text-decoration: underline 1px;
    scale: 105%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;
