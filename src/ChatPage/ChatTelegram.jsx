import { useState, useEffect } from "react";
import "./ChatTelegram.css";

function ChatTelegram() {

//     const [isChatVisible, setIsChatVisible] = useState(false);


//   const handleClickChat = () => {
//     console.log("Succes Chat");
//     setIsChatVisible(!isChatVisible);

//   };
//   useEffect(() => {
//     if (isChatVisible) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isChatVisible]);


  return (
    <div className="chat-wrapper">
      <div className="chat-wrapper-child">
        <a href="#0">
          {/* <img onClick={handleClickChat} src='/public/assests/messages.svg' alt="" /> */}
          <svg
            version="1.0"
            width="547.000000pt"
            height="456.000000pt"
            viewBox="0 0 547.000000 456.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,456.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1411 3280 c-42 -10 -80 -37 -108 -80 l-23 -33 0 -886 c0 -855 1
-887 19 -917 11 -18 36 -45 57 -60 l37 -29 1326 -3 c1478 -3 1383 -7 1439 66
l27 35 3 897 2 897 -22 33 c-33 48 -70 72 -125 81 -63 10 -2588 9 -2632 -1z
m603 -589 c463 -370 600 -474 639 -487 67 -22 143 -14 207 23 27 15 304 233
615 483 312 250 576 456 586 458 14 2 19 -3 19 -17 0 -12 -4 -21 -9 -21 -6 0
-99 -82 -208 -183 -109 -100 -304 -279 -433 -396 -143 -130 -235 -221 -235
-232 0 -11 183 -202 442 -462 244 -244 443 -451 443 -460 0 -9 -6 -17 -13 -17
-12 0 -566 448 -877 710 -63 53 -120 99 -126 103 -7 4 -54 -28 -110 -74 -114
-94 -144 -109 -216 -109 -68 0 -113 23 -223 114 -105 88 -80 92 -245 -44 -722
-596 -863 -709 -871 -704 -5 3 -9 12 -9 21 0 9 199 216 443 460 243 244 442
449 442 456 0 7 -191 188 -425 401 -234 214 -434 396 -444 406 -20 20 -15 56
7 47 6 -3 277 -217 601 -476z"
              />
            </g>
          </svg>
        </a>
      </div>
      {/* <div className={`chat ${isChatVisible ? "visible" : ""}`}>
        <form>
            <input type="text" placeholder="Ism kiriting ..."/>
            <textarea cols="30" rows="10"></textarea>
        </form>
      </div> */}
    </div>
  );
}

export default ChatTelegram;
