import styled from "styled-components";

const Container = styled.div`
  padding: 80px 0px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 0 25%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
`;

const Select = styled.select`
  margin: 20px;
`;

const ButtonContainer = styled.div`
  margin: 20px;
`;

const LoadingContainer = styled.div`
  padding: 80px 50%;
`;

export { Container, Modal, Select, ButtonContainer, LoadingContainer };
