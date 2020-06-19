import styled from "styled-components";

// App Card
export const ContainerStyle = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;
`;

export const MainCardStyle = styled.div`
  width: 400px;
  height: 600px;
  border: solid 1px black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Header Logo BTN toogle
export const HeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Main card Picture
export const ContainerPicture = styled.div`
  width: 360px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 5px;
    box-shadow: 0 0 8px gray;
    width: 330px;
    height: 440px;
  }
`;

// Match List
export const ListStyle = styled.div`
  width: 330px;
  height: 440px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 8px gray;
  li {
    list-style: none;
  }
`;

// Footer BTN Like Dislike
export const FooterStyle = styled.div`
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
