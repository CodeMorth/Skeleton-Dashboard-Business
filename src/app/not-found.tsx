import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-50 flex items-center justify-center">
        <div className="container w-full flex flex-col md:flex-row md:w-2/3 items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-[10rem] text-green-500 font-dark font-extrabold mb-8 text-center">
              404
            </div>
            <p className="text-2xl md:text-5xl leading-normal font-bold mb-8">
              Pagina no encontrada
            </p>

            <Link
              href="/"
              className="px-5 inline py-3 text-lg font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              Ir al Inicio
            </Link>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <Image
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              width={1000}
              height={1000}
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </>
  );
}
