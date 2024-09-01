"use client";

import MainContainer from "./-Components/MainContainer";
import NavBar from "./-Components/NavBar";

const Error = () => {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h3>Ocurrio un errror</h3>
          <div className="relative h-80- w-80"></div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Error;
