"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center">
      <h3 className="font-bold text-principal-color text-lg">
        Error, intentalo despues
      </h3>
      <button
        onClick={reset}
        className="mt-4 bg-principal-color text-white text-lg font-semibold px-4 py-2 rounded"
      >
        Intentar
      </button>
    </div>
  );
};

export default ErrorComponent;
