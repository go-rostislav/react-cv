import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/react-cv/home",
      hashLink: true,
    },
    {
      name: "About Me",
      path: "/react-cv/about-me",
      hashLink: true,
    },
    {
      name: "Skills",
      path: "/react-cv/skills",
      hashLink: false,
    },
    {
      name: "Certification",
      path: "/react-cv/certification",
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
