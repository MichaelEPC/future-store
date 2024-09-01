import style from "./style.module.css";

const MainContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className={`${style.MainContainer}`}>{children}</main>;
};

export default MainContainer;
