import Nav from "./Nav.js";


const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav />
      {children}
    
    </div>
  );
};

export default Layout;
