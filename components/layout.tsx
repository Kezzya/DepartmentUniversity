import { Footer } from "./footer";
import { MainHeader } from "./mainHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
