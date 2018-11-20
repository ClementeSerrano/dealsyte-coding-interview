import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #404040;
  padding: 20px;
  top: 0;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

const Items = styled.div`
  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    :hover,
    :active {
      color: #bfbfbf;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0 2rem;
    display: flex;
  }
  li {
    padding: 0 1rem;
  }
`;

const Text = styled.p`
  color: #fff;
  font-weight: 600;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Button = styled.div`
  margin-right: 3rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

export { Header, Nav, Items, Text, Spacer, Button };
