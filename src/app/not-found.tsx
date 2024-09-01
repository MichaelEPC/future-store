import Image from "next/image";
import MainContainer from "./-Components/MainContainer";
import NavBar from "./-Components/NavBar";

import dogSad from "../../public/dog-sad.jpeg";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h3>Aparentemente no se encontro la pagina</h3>
          <div className="relative h-80- w-80">
            <Image src={dogSad} alt="sad-dog" fill />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default NotFound;
