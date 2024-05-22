import Button from "@/atoms/Button";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center" id="home">
      <div className="w-full flex flex-row-reverse items-center justify-between mx-72 max-xl:mx-20 max-lg:mx-10 max-md:block max-md:mx-5">
        <div className="flex justify-center items-center ms-20 max-lg:ms-10 max-md:ms-0 max-md:mt-16">
          <div className="bg-gray-300 h-64 w-64 rounded-full border-red-500 border-2 overflow-hidden">
            <img src="img/pas-foto.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 max-md:mt-10 ">
          <h1 className="uppercase text-center text-outline-transparent">hello, my name is</h1>

          <div className="capitalize flex items-center text-green-600 text-4xl font-bold font-josefin mb-2">
            <div className="text-8xl max-lg:text-6xl max-md:text-5xl font-extrabold text-nowrap">m. syakirin</div>
          </div>
          <p className="capitalize text-center">
            <span className="lowercase">a</span>nd i&apos;m <span className="lowercase">a</span> web developer
          </p>
          <div>
            <Button className="">
              <a href="https://wa.me/+6282225379187">Get Connected</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
