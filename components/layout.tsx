import { BackToTopButton } from "./backToTopButton";
import { Footer } from "./footer/footer";
import { MainHeader } from "./mainHeader/mainHeader";
interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      <BackToTopButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
