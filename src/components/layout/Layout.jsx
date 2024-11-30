import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "About Me",
      path: "/about-me",
      hashLink: true,
    },
    {
      name: "Skills",
      path: "/skills",
      hashLink: false,
    },
    {
      name: "Certification",
      path: "/certification",
      hashLink: true,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
