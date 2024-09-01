import HeaderContainer from "../-Components/HeaderContainer";
import MainContainer from "../-Components/MainContainer";
import NavBar from "../-Components/NavBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>
      <MainContainer>
        <section className="h-auto w-full flex flex-col items-center">
          <div className="h-auto w-full mt-2 flex justify-center mb-4 border-b-2 border-ligh-gray flex-col items-center">
            <h3 className="font-semibold text-third-color text-2xl mt-4 mb-2">
              Productos
            </h3>
          </div>
          {children}
        </section>
      </MainContainer>
    </>
  );
};

export default Layout;
