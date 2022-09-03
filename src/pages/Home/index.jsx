import React from "react";

import styled from "styled-components";

function Home() {
  const HomePageRoot = styled.div`
    width: 100%;
    height: 550px;

    overflow: hidden;
    padding: 3%;
    margin-bottom: 20px;
  `;
  const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  `;
  const HomeText = styled.div``;
  const Text1 = styled.div`
    position: absolute;
    right: 70vh;
    font-size: 20px;
    font-family: JetBrains Mono;
    font-style: italic;
    margin-top: 1%;
    padding: 1%;
  `;
  const HelloImBookerKing = styled.div`
    font-size: 6rem;

    color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(.5px);
    text-shadow: 4px 3px 3px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-family: JetBrains Mono;
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    padding: 1%;
  `;

  return (
    <HomePageRoot>
      <FlexColumn>
        <HomeText>
          <HelloImBookerKing>
            Hello, <br />
            I’m Booker King <br />
          </HelloImBookerKing>
          <Text1>Full-Stack Web Developer</Text1>
        </HomeText>
      </FlexColumn>
    </HomePageRoot>
  );
}

export default Home;
