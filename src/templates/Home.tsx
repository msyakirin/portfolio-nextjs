import Button from "@/atoms/Button";
import CustomImage from "@/atoms/CustomImage";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-full flex items-center justify-between mx-72 max-lg:mx-20 max-md:block max-md:mx-5">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h1 className="uppercase text-outline-transparent">hello i am</h1>
          <div className="capitalize flex items-center text-green-600 text-4xl font-bold font-josefin mb-2">
            <CustomImage src="/img/favicon.ico" className="me-2 mb-2.5" width={35} height={35} />
            <div>. syakirin</div>
          </div>
          <p className="capitalize text-center">web developer based in pekalongan</p>
          <div>
            <Button className="">Get Connected</Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-gray-300 h-64 w-64 rounded-full max-md:mt-10 "></div>
        </div>
      </div>
    </div>
  );
}
