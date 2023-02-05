import styled from 'styled-components';


export const AuthContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  background: ${p => p.theme.colors.bgndFirst};
  background-image: repeating-radial-gradient(circle, ${p => p.theme.colors.bgndFirst} 0%, ${p => p.theme.colors.bgndSecond} 100%);
`;

export const AuthHeader = styled.h2`
  font-weight: 00;
  font-size: 48px;
  margin: 0;
  color: ${p => p.theme.colors.white};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 60px;
`;

export const AuthLabel = styled.label`
  font-weight: 600;
  display: flex;
  gap: 12px;
  font-size: ${p => p.theme.fontSizes.xs}px;
`;

export const AuthInput = styled.input`
  font-weight: 500;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.red};
    outline: none;
  }
`;
export const AuthButton = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  margin: 30px auto 0 auto;
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