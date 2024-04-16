import Button from "@/atoms/Button";

export default function About() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-20 text-center max-md:mx-3">
        <div className="w-full">
          <div className="border-b-2 border-green-500 mx-20 py-2">
            <h1 className="font-josefin text-3xl">About Me</h1>
          </div>
        </div>
        <div className="mt-5">Learning is my greatest joy, especially when it comes to coding. I&apos;m constantly seeking new challenges to expand my skills.</div>
        <div className="w-full mt-10 ">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Name</th>
                <td className="p-3">M. Syakirin</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Age</th>
                <td className="p-3">{new Date().getFullYear() - 2001}</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Address</th>
                <td className="p-3">Pekalongan</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Email</th>
                <td className="p-3">msyakirinnn@gmail.com</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Phone</th>
                <td className="p-3">082225379187</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center max-md:block">
            <Button className="mt-5 hover:bg-yellow-600">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
