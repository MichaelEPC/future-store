const HeaderContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <header>{children}</header>;
};

export default HeaderContainer;
