import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #a6a6a6;
  margin-right: 5px;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #a6a6a6;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Content = styled.p`
  font-size: 15px;
`;

export { Container, Text, Title, Subtitle, Spacer, Content };
