import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 5px;
`;

const Text = styled.div`
  padding: 5px 10px;
`;

const Title = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #a6a6a6;
  margin-right: 5px;
`;

const Subtitle = styled.span`
  font-size: 13px;
  color: #a6a6a6;
`;

const Content = styled.p`
  font-size: 15px;
`;

export { Container, Text, Title, Subtitle, Content };
