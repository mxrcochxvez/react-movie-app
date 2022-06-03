import React from "react";

const Layout = ({ children, style }) => {
  return (
    <div>
      <h1>Layout</h1>
      <div style={style}>{children}</div>
    </div>
  );
};

export default Layout;
