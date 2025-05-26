import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOpacity(scrollY > 500 ? 0 : 1); // fade out when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ ...navStyle, opacity, transition: "opacity 0.2s ease" }}>
      <Link to="/tehnosysteemid.ee/" style={linkStyle}>Avaleht</Link>
      <Link to="/tehnosysteemid.ee/contact" style={linkStyle}>Kontaktid</Link>
    </nav>
  );
};

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "4rem",
  padding: "1rem 0",
  backgroundColor: "rgb(0, 0, 0)",
  fontFamily: "SansRegular",
  fontStyle: "bold",
  fontSize: "1.9rem",
  color: "white",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const linkStyle: React.CSSProperties = {
  color: "white",
  fontFamily: "SansRegular",
  fontSize: "1.9rem",

  textDecoration: "none",
};

export default Navbar;
