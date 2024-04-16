import Button from "@/atoms/Button";

export default function Home() {
  return (
    <div className="w-full min-h-screen  flex items-center">
      <div className="w-full flex items-center justify-between mx-20 max-md:block max-md:mx-5">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h1 className="uppercase text-outline-transparent">hello i am</h1>
          <div className="capitalize flex text-green-600 text-4xl font-bold font-josefin mb-2">
            <img src="/img/favicon.ico" alt="" className="me-2" />. syakirin
          </div>
          <p className="capitalize text-center">web developer based in pekalongan</p>
          <div>
            <Button className="" children="Get Connected" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-gray-300 h-64 w-64 rounded-full max-md:mt-10 "></div>
        </div>
      </div>
    </div>
  );
}
