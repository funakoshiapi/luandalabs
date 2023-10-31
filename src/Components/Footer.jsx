

  export default function Footer() {
    return (
      <footer className="bg-white ">
        <div className=" flex flex-col m-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-center lg:px-8">
          <div className=" flex mt-8 md:order-1 md:mt-0 items-center justify-center">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2023 LuandaLabs, Lda Todos os direitos reservados.
            </p>
          </div>
          <div className="flex mt-8 md:order-1 md:mt-4 items-center justify-center">
            <p className="text-center text-xs leading-5 text-gray-500">
                Made in Angola
            </p>
          </div>
        </div>
      </footer>
    )
  }
  