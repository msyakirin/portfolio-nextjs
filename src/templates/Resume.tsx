export default function Resume() {
  return (
    <div>
      <div className="min-h-screen w-full mt-20">
        <div className="mx-20 text-center max-md:mx-3">
          <div className="w-full">
            <div className="border-b-2 border-green-500 mx-20 py-2">
              <h1 className="font-josefin text-3xl">Resume</h1>
            </div>
            <div className="mt-5">
              I am a graduate of Bachelor of Information Technology from ITS NU Pekalongan, with a deep understanding in the field of information technology and strong skills in software development. Here is my educational background:
            </div>

            <div className="grid place-content-center text-left font-josefin mt-5">
              <h1 className="text-xl font-bold my-2">Education</h1>
              <div className="flex">
                <div className="flex flex-col items-center w-5">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="h-20 mt-2 bg-black w-0.5"></div>
                </div>
                <div className="ms-5">
                  <div>SD Negri 01 Dororejo</div>
                  <div>(2007 - 2013)</div>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex flex-col items-center w-5">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="h-20 mt-2 bg-black w-0.5"></div>
                </div>
                <div className="ms-5">
                  <div>MTs Syarif Hidayah Doro</div>
                  <div>(2013 - 2016)</div>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex flex-col items-center w-5">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="h-20 mt-2 bg-black w-0.5"></div>
                </div>
                <div className="ms-5">
                  <div>SMK Ma&apos;arif NU Doro</div>
                  <div>(2016 - 2019)</div>
                  <div>Computer & Network Engineering</div>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex flex-col items-center w-5">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="h-20 mt-2 bg-black w-0.5"></div>
                </div>
                <div className="ms-5">
                  <div>ITS NU Pekalongan</div>
                  <div>(2020 - 2024)</div>
                  <div>Information Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
