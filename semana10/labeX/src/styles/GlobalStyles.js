import styled from "styled-components";
import wp from "../assets/wp3.jpg";

export const GlobalStyles = styled.div`
  border: solid 1px black;
  background-image: url(${wp});
  background-size: 1920px;
  color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  font-family: "Ropa Sans", "Roboto", sans-serif;
  button {
    border: solid 2px #ffffff;
    background-color: transparent;
    color: #ffffff;
    width: 164px;
    height: 54px;
    margin: 30px;
    font-size: 18px;
  }
`;

/* HEADER */

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    padding: 40px 20px;
    width: 200px;
    margin-left: 252px;
  }
  button {
    border: none;
    font-weight: bold;
  }
`;

/* HOME */

export const ContainerHomeStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 70vh;
  h1 {
    margin-left: 30px;
  }
  div {
    margin-left: 252px;
  }
`;

export const MainStyle = styled.div``;

/* LIST TRIPS PAGE */

export const ContainerTripsStyle = styled.div`
  display: flex;
  justify-content: center;
  section {
    margin: 8px;
    padding: 16px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
  }
`;
