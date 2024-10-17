import Button from "@/atoms/Button";
import Link from "next/link";

export default function About() {
  const pdfFileURL = "CV-M.Syakirin.pdf"; // Ganti dengan URL atau path PDF Anda

  const handleDownload = () => {
    // Navigasi langsung ke file PDF untuk mengunduh
    window.open(pdfFileURL, "_blank");
  };

  return (
    <div className="min-h-screen w-full max-md:mt-20" id="about">
      <div className="mx-20 text-center max-md:mx-3 max-sm:mx-0">
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
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Elementary School</th>
                <td className="p-3">
                  <div>SD Negri 01 Dororejo</div>
                  <div>(2007 - 2013)</div>
                </td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Islamic Junior High School</th>
                <td className="p-3">
                  <div>MTs Syarif Hidayah Doro</div>
                  <div>(2013 - 2016)</div>
                </td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">Vocational High School</th>
                <td className="p-3">
                  <div>SMK Ma&apos;arif NU Doro</div>
                  <div>(2016 - 2019)</div>
                  <div>Computer & Network Engineering</div>
                </td>
              </tr>
              <tr className="border-b">
                <th className="p-3 ps-64 max-md:ps-3 max-lg:ps-32">College</th>
                <td className="p-3">
                  <div>ITS NU Pekalongan</div>
                  <div>(2020 - 2024)</div>
                  <div>Information Technology</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div onClick={handleDownload} className="flex justify-center max-md:block max-md:ms-2">
            <Button className="mt-5 hover:bg-yellow-600">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
