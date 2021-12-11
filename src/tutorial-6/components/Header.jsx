import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import styles from '../style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h2>
        <Link to="/">React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/home" to="/">
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/about" to="/about">
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/profile" to="/profile">
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
