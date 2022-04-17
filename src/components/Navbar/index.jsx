import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaGripVertical, FaWindowClose } from 'react-icons/fa';

export default function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <>
      <Header>
        <Logo>Maris é calvo</Logo>
        <Nav>
          <Button onClick={handleClick}>
            {click ? (
              <FaWindowClose className="icons" />
            ) : (
              <FaGripVertical className="icons" />
            )}
          </Button>
          <ul className={click ? 'mobile' : 'nav'}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </Header>
    </>
  );
}

const Header = styled.header`
  box-sizing: border-box; // soma height com padding, no final tem 70px só
  display: flex;
  align-items: center;
  height: 70px;
  padding: 1rem;
  justify-content: space-between;
  background-color: #e7e7e7;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
  }

  li {
    a {
      color: #000;
      text-decoration: none;
      display: block;
      padding: 0.5rem;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      display: block;
      position: absolute;
      width: 100%;
      top: 70px;
      right: 0;
      background: #e7e7e7;
      transition: 0.6s;
      z-index: 1000;
      height: 0px;
      visibility: hidden;
      overflow-y: hidden;

      a {
        padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      }
    }
    ul.mobile {
      visibility: visible;
      overflow-y: auto;

      height: calc(100vh - 70px);
    }
  }
`;

const Button = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    border: none;
    height: 30px;

    .icons {
      width: 40px;
      height: 20px;
    }

    &:hover {
      background: none;
    }
  }
`;
