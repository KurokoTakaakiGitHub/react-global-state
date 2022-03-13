import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 tst Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #ffff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  width: 100%;
`;
