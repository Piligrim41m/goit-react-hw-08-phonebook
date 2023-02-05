import styled from "styled-components";

export const Container = styled.div`
  padding-left: 40px;
`

export const Header = styled.p`
  margin: 5px 0 10px 0; 
  font-size: 32px;
  font-weight: 700;
`;

export const DeleteButton = styled.button`
   border: none;
  color: white;
  display: block;
  background-color: ${p => p.theme.colors.headerBgnd};
  border-radius: ${p => p.theme.radii.normal}px;
  :hover,
  :focus {
    text-decoration: underline 1px;
    scale: 105%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`
export const ContactList = styled.ul`
    display: flex;
  flex-direction: column;
  gap: 19px;
`
export const ContactName = styled.span`
    font-weight: 500;
`
export const ContactNumber = styled.span`
    margin-left: 10px;
`
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
`