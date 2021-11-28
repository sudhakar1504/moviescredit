import React, { useEffect, useState } from "react";
import { Wrapper, Navbar, Logo, Form, Avator } from "./header.styled";
import logo from "../../images/logo.png";
import avator from "../../images/avator.png";
const Index = ({ search, setSearch }) => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

  return (
    <Wrapper primary={navbar}>
      <Navbar>
        <Logo src={logo} />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Avator src={avator} />
      </Navbar>
    </Wrapper>
  );
};

export default Index;
