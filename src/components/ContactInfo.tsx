import React from "react";

const ContactInfo = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Võta ühendust!</h1>
      <p style={infoStyle}><strong>Email:</strong> info@tehnosysteemid.ee</p>
      <p style={infoStyle}><strong>Phone:</strong> +372 5555 5555</p>
      <p style={infoStyle}><strong>Address:</strong> Tallinn, Estonia</p>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  maxHeight: "800px",
  minHeight: "200px",
  margin: "auto",
  padding: "10rem",
  paddingBottom: "20rem",
  display: "flex",

  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  color: "white",
  textAlign: "center",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "SansRegular",
  fontWeight: "bold",
  color: "white",
  fontSize: "4rem",
  marginBottom: "1rem",
};

const infoStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontFamily: "SansRegular",
  margin: "0.5rem 0",
};

export default ContactInfo;
