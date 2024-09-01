import Image from "next/image";
import style from "./style.module.css";
import { getProducts } from "app/services/shopify";

const ProductsContainer = async () => {
  const products = await getProducts();

  return (
    <div className="h-full w-full grid grid-cols-5 gap-5 px-20">
      {products.map((product) => {
        return (
          <div
            className="flex flex-col items-center rounded-lg border-2 border-ligh-gray relative shadow-md"
            key={product.id}
          >
            <div className="h-auto w-full self-start px-4">
              <p className="font-semibold text-lg mb-2 text-principal-color">
                {product.title}
              </p>
            </div>

            <div className="h-80 w-80 relative rounded-lg">
              <Image
                src={product.images[0].src}
                fill
                loading="eager"
                alt={product.image.id}
              />
              <div className="h-auto w-20 absolute bg-red-600 rounded-r-2xl -right-4 -top-2 p-2">
                <p className="font-bold text-sm text-second-color underline">
                  $144.90
                </p>
              </div>
            </div>

            <div className="h-auto w-3/4 bg-principal-color mt-2 mb-1 rounded-lg px-2 py-2">
              <p className="text-center text-second-color font-semibold p-1">
                {product.tags}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsContainer;
