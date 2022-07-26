import { Footer } from "./footer";
import { MainHeader } from "./mainHeader";
interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
