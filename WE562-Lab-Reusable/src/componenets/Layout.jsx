import React from "react";

const layoutStyle = {
  display: "grid",
  gridTemplateAreas: `
      "header header"
      "sidebar main"
      "footer footer"
    `,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "250px 1fr",
  minHeight: "100vh",
};

const headerStyle = {
  gridArea: "header",
  backgroundColor: "#91d982",
  padding: "10px",
  textAlign: "center",
};

const sidebarStyle = {
  gridArea: "sidebar",
  backgroundColor: "#e8e8e8",
  padding: "10px",
};

const mainStyle = {
  gridArea: "main",
  padding: "10px",
  backgroundColor: "#8db3eb",
};

const footerStyle = {
  gridArea: "footer",
  backgroundColor: "#b59eb2",
  padding: "10px",
  textAlign: "center",
};
function Layout({ children }) {
  return <div style={layoutStyle}>{children}</div>;
}

export default Layout; //ส่งฟังก์ชั่น
export { headerStyle, sidebarStyle, mainStyle, footerStyle }; //ส่งออกตัวแปร
