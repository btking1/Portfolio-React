import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  const Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 5;
    margin-bottom: 3%;
    padding: 1%;
    // make the navbar fixed to the top
    // position: fixed;
    // top: 0;
    // left: 0;
    // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    // make the navbar stick to the top
    @media (max-width: 600px) {
      position: static;
      background-color: transparent;
      box-shadow: none;
      border-bottom: none;
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  `;
  const Logo = styled.div`
    font-size: 24px;
    font-weight: 700;
    font-family: Dosis;
    margin-left: 1%;
    display: flex;
    width: 100%;
    flex-direction: row;
  `;

  const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5%;
    width: 50%;
  `;

  const Link = styled.div`
    font-size: 22px;
    font-weight: 500;
    font-family: Dosis;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    margin-right: 2%;
    align-items: center;
  `;

  return (
    <>
      <Nav>
        <NavLink key="5" to="/">
          <Logo>BK : DEV</Logo>
        </NavLink>
        <Links>
          {[
            {
              childText: `About`,
              key: 1,
              link: `/about`,
            },
            {
              childText: `Works`,
              key: 2,
              link: `/works`,
            },
            {
              childText: `Contact`,
              key: 3,
              link: `/contact`,
            },
            {
              childText: `Resume`,
              key: 4,
              link: `/resume`,
            },
          ].map((data) => (
            <NavLink key={data.key} to={data.link}>
              <Link key={data.key}>{data.childText}</Link>
            </NavLink>
          ))}
        </Links>
      </Nav>
    </>
  );
}

export default NavBar;
