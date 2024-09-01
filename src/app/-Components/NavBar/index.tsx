const NavBar = () => {
  return (
    <nav className="flex h-auto w-full justify-center bg-white border-b-2 border-ligh-gray shadow-lg py-4 fixed z-30">
      <ul className="flex h-auto w-72 items-center justify-between">
        <li>
          <p className="font-bold text-lg text-principal-color cursor-pointer">
            Home
          </p>
        </li>
        <li>
          <p className="font-bold text-lg text-principal-color cursor-pointer">
            Productos
          </p>
        </li>
        <li>
          <p className="font-bold text-lg text-principal-color cursor-pointer">
            Contacto
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
