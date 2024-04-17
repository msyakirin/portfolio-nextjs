import { ButtonFaBootstrap, ButtonFaCss3Alt, ButtonFaHtml5, ButtonFaLaravel, ButtonFaReact } from "@/atoms/ButtonFontAwesome";

export default function Skils() {
  return (
    <div className="min-h-screen w-full mt-20">
      <div className="mx-20 text-center max-md:mx-3">
        <div className="w-full">
          <div className="border-b-2 border-green-500 mx-20 py-2">
            <h1 className="font-josefin text-3xl">Skils</h1>
          </div>
        </div>
        <div className="my-5">
          I have a strong foundation in frontend development, specializing in creating visually appealing user interfaces and engaging interactive experiences. Additionally, I have hands-on experience in backend development, focusing on
          building robust and scalable systems to complement frontend functionalities and enhance overall user experiences.
        </div>

        {/* Icons Programming */}
        <div className="grid grid-cols-3 gap-3 max-md:hidden">
          <ButtonFaHtml5 className="text-7xl py-2 border max-md:border-none text-red-500" />
          <ButtonFaCss3Alt className="text-7xl py-2 border max-md:border-none text-blue-500" />

          {/* Icon JavaScript */}
          <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="60" width="60" viewBox="0 0 124 141.53199999999998">
              <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" />
              <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" />
              <g fill="#fff">
                <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
              </g>
            </svg>
          </div>

          {/* Icon PHP */}
          <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 50 50">
              <path
                fill="#777BB4"
                d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"></path>
            </svg>
          </div>

          <ButtonFaBootstrap className="text-6xl py-2 border max-md:border-none flex justify-center items-center text-purple-500" />

          {/* Icon Tailwindcss */}
          <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
            <svg fill="#000000" width="70" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#38B2AC"
                d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
              />
            </svg>
          </div>

          <ButtonFaReact className="text-7xl py-2 border max-md:border-none flex justify-center items-center text-[#61DAFB]" />

          {/* Icon NextJs */}
          <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
              <g>
                <path
                  className="dark-light-mode-skils"
                  d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                  fill="#000000"></path>
              </g>
            </svg>
          </div>

          {/* Icon TypeScript */}
          <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32">
              <title>file_type_typescript</title>
              <path
                className="dark-light-mode-skils"
                d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
              />
            </svg>
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-3">
              <ButtonFaLaravel className="text-7xl py-2 border max-md:border-none text-red-500" />
              <div className="text-7xl py-2 border max-md:border-none flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="60" x="0px" y="0px" viewBox="0 0 102.33 122.88">
                  <g>
                    <path
                      fill="red"
                      d="M32.92,122.87c-7.37-3.18-14.26-11.28-14.28-19.56c-0.02-9.03,5.7-16.7,12.82-21.73 c-0.86,3.23-1.32,6.19,0.8,9.08c1.97,2.69,5.42,3.99,8.68,3.29c7.61-1.67,7.96-10.04,3.45-14.92c-4.46-4.83-8.78-10.29-7.08-17.29 c0.85-3.51,3.01-6.8,5.74-9.15c-2.1,5.52,3.87,10.96,7.8,13.67c6.82,4.7,14.3,8.26,20.57,13.77c6.59,5.79,11.46,13.62,10.48,22.71 c-1.07,9.85-8.89,16.69-17.66,20.15c18.54-4.09,37.71-18.49,38.1-39.05c0.33-16.92-11.28-29.94-25.66-37.4l-0.75-0.41 c0.39,0.96,0.52,1.77,0.51,2.5c0.13-0.54,0.22-1.09,0.24-1.66c0,0.68-0.09,1.35-0.26,2.01l0.02-0.35c-0.21,0.9-0.57,1.76-1.06,2.54 l0.21-0.23c-2.87,4.76-10.63,5.79-14.47,0.86c-6.17-7.92,0.13-16.47,1.01-24.86C63.21,16.32,56.61,6.11,48.43,0 c4.5,7.29-1.43,16.93-6.18,22.31c-4.6,5.22-10.2,9.59-15.28,14.33c-5.46,5.1-10.71,10.47-15.19,16.45 C2.8,65.07-2.69,80.14,1.35,95.08C5.38,110.01,18.31,119.51,32.92,122.87L32.92,122.87L32.92,122.87z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Icons Programming Mobile */}
        <div className="hidden max-md:block">
          <div className="border-b-2 border-green-500 mx-20 py-2 mt-20">
            <h1 className="text-xl font-bold">Frontend</h1>
          </div>

          <table className="w-full text-left border-collapse mt-5">
            <tbody className="font-josefin">
              <tr className="border">
                <th className="p-3">
                  <ButtonFaHtml5 className="text-4xl border max-md:border-none text-red-500" />
                </th>
                <td className="p-3">HTML</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <ButtonFaCss3Alt className="text-4xl border max-md:border-none text-blue-500" />
                </th>
                <td className="p-3">CSS</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <div className="border max-md:border-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="35" width="35" viewBox="0 0 124 141.53199999999998">
                      <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" />
                      <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" />
                      <g fill="#fff">
                        <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
                      </g>
                    </svg>
                  </div>
                </th>
                <td className="p-3">JavaScript</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <ButtonFaBootstrap className="text-4xl border max-md:border-none flex items-center text-purple-500" />
                </th>
                <td className="p-3">Bootstrap</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <div className="text-4xl border max-md:border-none flex items-center">
                    <svg fill="#000000" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#38B2AC"
                        d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                      />
                    </svg>
                  </div>
                </th>
                <td className="p-3">Tailwind CSS</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <ButtonFaReact className="text-4xl border max-md:border-none flex items-center text-[#61DAFB]" />
                </th>
                <td className="p-3">ReactJs</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <div className="border max-md:border-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                      <g>
                        <path
                          d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                          fill="#000000"></path>
                      </g>
                    </svg>
                  </div>
                </th>
                <td className="p-3">NextJs</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <div className="border max-md:border-none flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
                      <title>file_type_typescript</title>
                      <path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" />
                    </svg>
                  </div>
                </th>
                <td className="p-3">TypeScript</td>
              </tr>
            </tbody>
          </table>

          <div className="border-b-2 border-green-500 mx-20 py-2 mt-5">
            <h1 className="text-xl font-bold mt-20">Backend</h1>
          </div>
          <table className="w-full text-left border-collapse mt-5">
            <tbody className="font-josefin">
              <tr className="border">
                <th className="p-3">
                  <div className="border max-md:border-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50">
                      <path
                        fill="#777BB4"
                        d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"></path>
                    </svg>
                  </div>
                </th>
                <td className="p-3">PHP</td>
              </tr>
              <tr className="border">
                <th className="p-3">
                  <ButtonFaLaravel className="text-4xl border max-md:border-none text-red-500" />
                </th>
                <td className="p-3">Laravel</td>
              </tr>
              <tr className="border">
                <td className="p-3">
                  <div className="border max-md:border-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="35" x="0px" y="0px" viewBox="0 0 102.33 122.88">
                      <g>
                        <path
                          fill="red"
                          d="M32.92,122.87c-7.37-3.18-14.26-11.28-14.28-19.56c-0.02-9.03,5.7-16.7,12.82-21.73 c-0.86,3.23-1.32,6.19,0.8,9.08c1.97,2.69,5.42,3.99,8.68,3.29c7.61-1.67,7.96-10.04,3.45-14.92c-4.46-4.83-8.78-10.29-7.08-17.29 c0.85-3.51,3.01-6.8,5.74-9.15c-2.1,5.52,3.87,10.96,7.8,13.67c6.82,4.7,14.3,8.26,20.57,13.77c6.59,5.79,11.46,13.62,10.48,22.71 c-1.07,9.85-8.89,16.69-17.66,20.15c18.54-4.09,37.71-18.49,38.1-39.05c0.33-16.92-11.28-29.94-25.66-37.4l-0.75-0.41 c0.39,0.96,0.52,1.77,0.51,2.5c0.13-0.54,0.22-1.09,0.24-1.66c0,0.68-0.09,1.35-0.26,2.01l0.02-0.35c-0.21,0.9-0.57,1.76-1.06,2.54 l0.21-0.23c-2.87,4.76-10.63,5.79-14.47,0.86c-6.17-7.92,0.13-16.47,1.01-24.86C63.21,16.32,56.61,6.11,48.43,0 c4.5,7.29-1.43,16.93-6.18,22.31c-4.6,5.22-10.2,9.59-15.28,14.33c-5.46,5.1-10.71,10.47-15.19,16.45 C2.8,65.07-2.69,80.14,1.35,95.08C5.38,110.01,18.31,119.51,32.92,122.87L32.92,122.87L32.92,122.87z"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
                <td className="p-3">CodeIgniter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
