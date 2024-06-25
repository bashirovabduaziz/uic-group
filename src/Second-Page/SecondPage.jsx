import QuicSolutions from "../Icon/qualification-skils-1.svg";
import UniqueProjects from "../Icon/qualification-skils-2.svg";
import Galerfirst from "/public/assests/swiper-img/first-galery.jpg";
import GalerSecond from "/public/assests/swiper-img/second-galery.jpg";
import GalerFirstTwo from '/public/assests/swiper-img/Thirty-Galery.jpg';
import GalerySecondTwo from '/public/assests/swiper-img/fourt-galery.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SecondPage = () => {

  const [swiperUp, setSwiperUp] = useState(false)

  const {t} = useTranslation();


  function onPopClick(){
    setSwiperUp(true)
  }

  return (
    <div className="Second-Page-Parent" id="about">
        <div className="container-Blog">
          <div className="Second-Page-Childs">
            <div className="Second-Page-Child-Left">
              <div className="text-animation">
                <svg width="121" height="121" viewBox="0 0 121 121" fill="none">
                  <g clipPath="" fill="none">
                    <path
                      d="M53.6828 0.521075L53.8444 1.49026C53.8623 1.61589 53.7905 1.72358 53.6649 1.74153L50.0394 2.31586L50.4702 4.99009L53.8982 4.43371C54.0238 4.41576 54.1315 4.48755 54.1495 4.61318L54.311 5.58237C54.3289 5.708 54.2572 5.81569 54.1315 5.83364L50.7035 6.39002L51.4035 10.6975C51.4214 10.8231 51.3496 10.9308 51.224 10.9488L50.0933 11.1283C49.9676 11.1462 49.8599 11.0744 49.842 10.9488L48.3164 1.38257C48.2985 1.25694 48.3703 1.14925 48.4959 1.1313L53.4495 0.341596C53.5572 0.323649 53.6649 0.39544 53.6828 0.521075Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M63.0157 10.0515L61.7952 10.0695C61.6875 10.0695 61.5978 10.0336 61.526 9.92587L59.1569 6.44399L57.9544 6.46194L58.0082 9.90792C58.0082 10.0336 57.9185 10.1233 57.7929 10.1233L56.6442 10.1412C56.5186 10.1412 56.4288 10.0515 56.4288 9.92587L56.2673 0.25198C56.2673 0.126345 56.357 0.0366061 56.4827 0.0366061L59.3543 0.00071036C61.6337 -0.0351853 62.908 1.29296 62.9259 3.15953C62.9439 4.6492 62.1721 5.83376 60.7004 6.26451L63.1413 9.80023C63.2669 9.94382 63.1952 10.0515 63.0157 10.0515ZM57.9364 5.062L59.3723 5.04406C60.4671 5.02611 61.4363 4.54152 61.4004 3.21337C61.3824 1.86729 60.3953 1.41859 59.3005 1.43654L57.8646 1.45449L57.9364 5.062Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M65.4743 0.197599L66.605 0.305286C66.7307 0.323234 66.8204 0.412974 66.8024 0.538608L65.9051 10.1766C65.8871 10.3022 65.7974 10.392 65.6717 10.374L64.541 10.2663C64.4154 10.2484 64.3256 10.1587 64.3436 10.033L65.241 0.395026C65.241 0.269391 65.3487 0.179652 65.4743 0.197599Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M73.0309 10.3738L72.8514 11.343C72.8335 11.4686 72.7258 11.5404 72.6002 11.5224L67.5389 10.5353C67.4132 10.5174 67.3414 10.4097 67.3594 10.284L69.208 0.78963C69.226 0.663995 69.3336 0.592203 69.4593 0.610151L74.5026 1.57933C74.6283 1.59728 74.7 1.70497 74.6821 1.8306L74.5026 2.79979C74.4847 2.92542 74.377 2.99721 74.2514 2.97927L70.5362 2.26135L70.0157 4.91763L73.4975 5.59965C73.6232 5.6176 73.695 5.72529 73.677 5.85092L73.4975 6.82011C73.4796 6.94574 73.3719 7.01753 73.2463 6.99958L69.7644 6.31757L69.1542 9.42254L72.8873 10.1405C72.9771 10.1584 73.0488 10.2481 73.0309 10.3738Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M84.697 5.18742L81.3587 14.269C81.3228 14.3947 81.1971 14.4485 81.0895 14.3947L79.7793 13.9101C79.6716 13.8742 79.5998 13.8024 79.5818 13.6768L78.0742 5.06179L75.5256 12.1332C75.4897 12.2589 75.3641 12.3127 75.2564 12.2589L74.1795 11.864C74.0539 11.8281 74.0001 11.7025 74.0539 11.5948L77.3743 2.51319C77.4101 2.40551 77.5178 2.35166 77.6255 2.36961L78.9357 2.8542C79.0434 2.8901 79.1152 2.96189 79.1331 3.08753L80.6408 11.7204L83.2253 4.66694C83.2611 4.5413 83.3868 4.48746 83.4945 4.5413L84.5713 4.93615C84.697 4.9541 84.7508 5.06179 84.697 5.18742Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M91.9298 14.7536C90.4939 17.1945 87.8018 18.1996 84.8045 16.4227L82.5969 15.1125C82.4892 15.0408 82.4533 14.9331 82.5251 14.8074L87.4428 6.46168C87.5146 6.35399 87.6223 6.3181 87.7479 6.38989L89.9555 7.70008C92.9348 9.47692 93.3835 12.3127 91.9298 14.7536ZM90.5657 13.9459C91.7323 11.9717 91.3554 10.1769 89.2196 8.93848L88.1787 8.32826L84.4814 14.61L85.5224 15.2202C87.6582 16.4586 89.4171 15.9022 90.5657 13.9459Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M94.9451 22.2019L94.3169 22.9557C94.2272 23.0634 94.1195 23.0634 94.0118 22.9916L90.2428 19.9046C90.1351 19.8149 90.1351 19.7072 90.2069 19.5995L96.345 12.1152C96.4348 12.0075 96.5424 12.0075 96.6501 12.0793L97.5296 12.7972C97.6373 12.887 97.6373 12.9947 97.5655 13.1024L92.1991 19.6713L94.9092 21.8968C94.9989 21.9686 95.0169 22.0942 94.9451 22.2019Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M106.055 21.2146L100.365 22.5787L97.0629 25.7734C96.9731 25.8631 96.8475 25.8631 96.7577 25.7734L95.968 24.9478C95.8783 24.8581 95.8783 24.7324 95.968 24.6427L99.2704 21.448L100.832 15.7944C100.886 15.6149 100.993 15.597 101.119 15.7226L101.945 16.5841C102.016 16.6738 102.052 16.7636 102.016 16.8713L100.868 20.9813L105.014 19.9762C105.121 19.9403 105.211 19.9762 105.301 20.066L106.144 20.9454C106.252 21.0531 106.234 21.1608 106.055 21.2146Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M113.341 31.9293L112.498 32.4318C112.39 32.5036 112.264 32.4677 112.193 32.3601L111.044 30.4396L103.775 34.8189C103.667 34.8907 103.542 34.8548 103.47 34.7471L102.878 33.7779C102.806 33.6702 102.842 33.5446 102.95 33.4728L110.218 29.0935L109.07 27.1731C108.998 27.0654 109.034 26.9398 109.142 26.868L109.985 26.3655C110.093 26.2937 110.218 26.3296 110.29 26.4373L113.413 31.6242C113.485 31.7498 113.467 31.8755 113.341 31.9293Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M108.603 42.6633L107.706 43.0402C107.58 43.094 107.472 43.0402 107.419 42.9325L105.408 38.1763C105.355 38.0507 105.408 37.943 105.516 37.8892L114.436 34.1022C114.562 34.0483 114.669 34.1022 114.723 34.2099L116.733 38.9481C116.787 39.0737 116.733 39.1814 116.626 39.2353L115.728 39.6122C115.603 39.666 115.495 39.6122 115.441 39.5045L113.969 36.0226L111.475 37.0815L112.857 40.348C112.911 40.4737 112.857 40.5813 112.749 40.6352L111.852 41.0121C111.726 41.0659 111.618 41.0121 111.564 40.9044L110.182 37.6379L107.275 38.8763L108.765 42.3761C108.765 42.5018 108.711 42.6095 108.603 42.6633Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M109.842 51.8883L109.555 50.7576C109.519 50.6499 109.555 50.5422 109.662 50.4704L111.403 49.3397L110.398 45.3194L108.334 45.1399C108.191 45.122 108.137 45.0502 108.101 44.9425L107.814 43.8118C107.778 43.6502 107.85 43.5605 108.011 43.5784L118.277 44.6553C118.403 44.6733 118.475 44.745 118.511 44.8707L118.78 45.9296C118.816 46.0373 118.78 46.145 118.672 46.2168L110.129 51.996C110.003 52.0857 109.896 52.0498 109.842 51.8883ZM112.624 48.55L116.698 45.8758L111.834 45.445L112.624 48.55Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M120.377 62.7281L110.703 63.123C110.578 63.123 110.488 63.0512 110.47 62.9076L110.416 61.7589C110.416 61.6333 110.488 61.5436 110.631 61.5256L117.416 61.2564L110.47 58.7078C110.344 58.6719 110.29 58.5642 110.29 58.4565L110.255 57.3797C110.255 57.272 110.308 57.1643 110.416 57.1104L117.057 54.0414L110.344 54.3106C110.219 54.3106 110.129 54.2388 110.111 54.0952L110.057 52.9465C110.057 52.8209 110.129 52.7312 110.272 52.7132L119.946 52.3184C120.072 52.3184 120.162 52.3902 120.18 52.5337L120.234 53.8978C120.234 54.0055 120.198 54.1131 120.108 54.167L112.067 57.8104L120.377 60.8077C120.485 60.8436 120.521 60.9513 120.539 61.059L120.592 62.4589C120.592 62.6384 120.503 62.7281 120.377 62.7281Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M115.495 83.4405L114.58 83.0995C114.454 83.0457 114.401 82.938 114.454 82.8124L115.729 79.3843L113.198 78.4331L111.996 81.6817C111.942 81.8073 111.834 81.8611 111.708 81.8073L110.793 81.4663C110.667 81.4124 110.614 81.3048 110.667 81.1791L111.87 77.9306L107.778 76.405C107.652 76.3512 107.598 76.2435 107.652 76.1178L108.047 75.041C108.101 74.9153 108.209 74.8615 108.334 74.9153L117.398 78.2895C117.524 78.3434 117.577 78.451 117.524 78.5767L115.765 83.279C115.729 83.4405 115.621 83.4944 115.495 83.4405Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M102.591 86.8681L103.183 85.7913C103.237 85.6836 103.327 85.6297 103.435 85.6297L107.634 85.3067L108.209 84.2477L105.176 82.5786C105.068 82.5248 105.032 82.3991 105.086 82.2914L105.642 81.2864C105.696 81.1787 105.822 81.1428 105.929 81.1966L114.419 85.8631C114.526 85.9169 114.562 86.0425 114.508 86.1502L113.126 88.6629C112.032 90.6551 110.237 91.1038 108.604 90.2064C107.293 89.4885 106.647 88.2322 107.006 86.7425L102.735 87.1194C102.555 87.1373 102.501 87.0117 102.591 86.8681ZM109.447 84.9298L108.747 86.2041C108.227 87.1732 108.173 88.2501 109.339 88.8783C110.524 89.5244 111.385 88.8962 111.924 87.945L112.624 86.6707L109.447 84.9298Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M109.931 93.8677L109.285 94.801C109.213 94.9087 109.088 94.9266 108.98 94.8548L101.047 89.309C100.939 89.2372 100.922 89.1115 100.993 89.0038L101.639 88.0706C101.711 87.9629 101.837 87.9449 101.945 88.0167L109.877 93.5626C109.985 93.6523 110.003 93.76 109.931 93.8677Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M97.3318 95.3939L96.578 94.7478C96.4883 94.6581 96.4703 94.5324 96.5601 94.4427L99.9163 90.5301C100.006 90.4403 100.132 90.4224 100.221 90.5121L107.562 96.8298C107.652 96.9195 107.67 97.0451 107.58 97.1349L104.242 101.03C104.152 101.119 104.026 101.137 103.937 101.048L103.183 100.401C103.093 100.312 103.075 100.186 103.165 100.096L105.624 97.2246L103.578 95.4657L101.262 98.1579C101.173 98.2477 101.047 98.2656 100.957 98.1759L100.203 97.5297C100.114 97.44 100.096 97.3144 100.186 97.2246L102.501 94.5324L100.114 92.4864L97.637 95.376C97.5652 95.4657 97.4395 95.4837 97.3318 95.3939Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M96.0938 108.101L89.83 100.724C89.7403 100.616 89.7582 100.509 89.8479 100.419L90.9069 99.5217C90.9966 99.4499 91.0863 99.4319 91.194 99.4678L99.4321 102.411L94.5862 96.6859C94.4964 96.5782 94.5144 96.4705 94.6041 96.3808L95.4836 95.6449C95.5913 95.5552 95.6989 95.5731 95.7887 95.6629L102.052 103.039C102.124 103.129 102.124 103.237 102.052 103.327L100.976 104.224C100.886 104.296 100.796 104.314 100.688 104.278L92.4504 101.316L97.3143 107.042C97.404 107.15 97.386 107.257 97.2963 107.347L96.4169 108.083C96.3092 108.208 96.1835 108.19 96.0938 108.101Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M84.2122 109.68C82.7943 107.221 83.243 104.404 86.2582 102.663L88.4838 101.37C88.5915 101.299 88.7171 101.334 88.7709 101.442L93.5989 109.824C93.6707 109.931 93.6348 110.057 93.5271 110.111L91.3016 111.403C88.3043 113.162 85.6301 112.139 84.2122 109.68ZM85.5762 108.891C86.7249 110.865 88.4658 111.439 90.6016 110.201L91.6605 109.59L88.0171 103.291L86.9582 103.901C84.8224 105.121 84.4455 106.916 85.5762 108.891Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M76.2613 108.621L75.9023 107.706C75.8485 107.58 75.9023 107.472 76.028 107.418L80.5688 105.659C80.6944 105.606 80.8021 105.659 80.8559 105.785L84.3378 114.813C84.3917 114.938 84.3378 115.046 84.2122 115.1L83.1533 115.513C83.0276 115.567 82.9199 115.513 82.8661 115.387L79.815 107.472L76.5485 108.746C76.4049 108.782 76.2972 108.746 76.2613 108.621Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M71.6128 118.761L73.246 113.144L72.1153 108.693C72.0794 108.567 72.1512 108.459 72.2768 108.423L73.3896 108.136C73.5152 108.1 73.6229 108.172 73.6588 108.298L74.7895 112.749L78.9175 116.895C79.0432 117.02 79.0073 117.146 78.8458 117.182L77.6791 117.487C77.5715 117.523 77.4638 117.487 77.392 117.415L74.3947 114.382L73.2281 118.492C73.1922 118.6 73.1204 118.672 73.0127 118.69L71.8281 118.995C71.6487 119.031 71.5589 118.941 71.6128 118.761Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M58.6724 119.785L58.6545 118.798C58.6545 118.672 58.7442 118.582 58.8699 118.582L61.1134 118.528L60.9159 110.057C60.9159 109.931 61.0057 109.842 61.1313 109.842L62.28 109.806C62.4056 109.806 62.4953 109.895 62.4953 110.021L62.6928 118.492L64.9362 118.439C65.0619 118.439 65.1516 118.528 65.1516 118.654L65.1696 119.641C65.1696 119.767 65.0798 119.856 64.9542 119.856L58.9058 120C58.7622 120 58.6724 119.91 58.6724 119.785Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M51.7089 110.362L51.8166 109.393C51.8346 109.267 51.9243 109.195 52.05 109.195L57.1651 109.788C57.2907 109.806 57.3625 109.895 57.3625 110.021L56.2497 119.641C56.2318 119.767 56.1421 119.838 56.0164 119.838L50.9013 119.246C50.7757 119.228 50.7039 119.138 50.7039 119.013L50.8115 118.044C50.8295 117.918 50.9192 117.846 51.0449 117.846L54.8139 118.277L55.119 115.585L51.5833 115.172C51.4577 115.154 51.3859 115.064 51.3859 114.939L51.4936 113.969C51.5115 113.844 51.6013 113.772 51.7269 113.772L55.2626 114.185L55.6216 111.044L51.8525 110.613C51.7628 110.577 51.691 110.488 51.7089 110.362Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M43.058 106.898L44.1887 107.204C44.2964 107.239 44.3682 107.293 44.3862 107.437L44.5118 109.519L48.5142 110.632L49.6987 108.927C49.7705 108.819 49.8782 108.801 49.9859 108.819L51.1166 109.124C51.2781 109.16 51.314 109.286 51.2243 109.411L45.1938 117.811C45.122 117.918 45.0143 117.936 44.8887 117.901L43.8298 117.613C43.7221 117.577 43.6324 117.506 43.6324 117.38L42.8247 107.096C42.8068 106.934 42.9145 106.845 43.058 106.898ZM44.6015 110.955L44.9067 115.819L47.6706 111.798L44.6015 110.955Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M28.4302 110.703L32.8813 102.106C32.9351 101.998 33.0607 101.944 33.1684 102.016L34.1735 102.537C34.2812 102.59 34.335 102.716 34.2632 102.824L31.1403 108.854L36.7939 104.08C36.8836 103.99 37.0093 103.99 37.099 104.044L38.0502 104.529C38.1579 104.583 38.2118 104.672 38.1938 104.798L37.5836 112.085L40.6706 106.108C40.7245 106.001 40.8501 105.947 40.9578 106.018L41.9629 106.539C42.0706 106.593 42.1244 106.718 42.0526 106.826L37.6554 115.459C37.6015 115.567 37.4759 115.621 37.3682 115.549L36.1478 114.921C36.0401 114.867 35.9683 114.777 35.9862 114.669L36.7939 105.875L30.0814 111.618C29.9917 111.69 29.884 111.672 29.7763 111.618L28.5379 110.972C28.4122 110.936 28.3763 110.811 28.4302 110.703Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M12.8518 96.2011L13.6056 95.5729C13.7133 95.4832 13.821 95.5011 13.9107 95.6088L16.2619 98.4087L18.3259 96.6678L16.1003 94.0115C16.0106 93.9038 16.0286 93.7961 16.1183 93.7064L16.8721 93.0782C16.9798 92.9884 17.0875 93.0064 17.1772 93.0961L19.4028 95.7524L22.7411 92.9526C22.8487 92.8628 22.9564 92.8808 23.0462 92.9705L23.782 93.8499C23.8718 93.9576 23.8538 94.0653 23.7641 94.1551L16.3516 100.365C16.2439 100.455 16.1362 100.437 16.0465 100.347L12.8338 96.5062C12.7441 96.3985 12.762 96.2909 12.8518 96.2011Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M16.2436 83.279L16.8898 84.3199C16.9436 84.4097 16.9616 84.5174 16.9077 84.6251L15.1309 88.4479L15.759 89.471L18.7025 87.6582C18.8102 87.5864 18.9358 87.6223 19.0076 87.73L19.5999 88.6992C19.6717 88.8069 19.6358 88.9325 19.5281 89.0043L11.2721 94.0656C11.1644 94.1374 11.0388 94.1015 10.967 93.9938L9.4773 91.5709C8.27479 89.6325 8.77733 87.8557 10.3747 86.8865C11.649 86.0968 13.0489 86.1686 14.1796 87.2095L15.9565 83.3149C16.0283 83.1174 16.1539 83.1354 16.2436 83.279ZM14.5386 90.2068L13.7848 88.9684C13.2105 88.0351 12.2951 87.4608 11.1644 88.1608C10.0157 88.8607 10.1414 89.9376 10.7157 90.8709L11.4695 92.0914L14.5386 90.2068Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M6.51608 86.222L6.03149 85.1989C5.97765 85.0733 6.01354 84.9656 6.13918 84.9118L14.8798 80.7479C15.0054 80.694 15.1131 80.7299 15.1669 80.8556L15.6515 81.8786C15.7054 82.0042 15.6695 82.1119 15.5439 82.1657L6.8212 86.3296C6.69556 86.3835 6.58788 86.3476 6.51608 86.222Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M11.4155 74.5199L12.3488 74.1968C12.4744 74.1609 12.5821 74.1968 12.618 74.3224L14.359 79.1863C14.3949 79.3119 14.359 79.4196 14.2333 79.4555L5.11582 82.722C4.99019 82.7579 4.8825 82.722 4.8466 82.5964L3.10566 77.7505C3.06977 77.6248 3.10566 77.5171 3.2313 77.4812L4.16458 77.1582C4.29022 77.1223 4.39791 77.1582 4.4338 77.2838L5.7081 80.8554L8.25669 79.9401L7.05419 76.6018C7.01829 76.4762 7.05419 76.3685 7.17982 76.3326L8.11311 76.0095C8.23875 75.9736 8.34643 76.0095 8.38233 76.1352L9.58483 79.4735L12.5642 78.3966L11.2899 74.825C11.254 74.6814 11.2899 74.5557 11.4155 74.5199Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M1.00591 67.1438L10.5183 65.367C10.6439 65.3491 10.7516 65.4208 10.7695 65.5285L11.0208 66.8926C11.0388 67.0003 11.0208 67.1079 10.9311 67.1797L4.29036 72.8692L11.6669 71.4872C11.7926 71.4693 11.9003 71.5411 11.9182 71.6667L12.1336 72.7974C12.1515 72.923 12.0797 73.0307 11.9541 73.0487L2.44174 74.8255C2.33405 74.8435 2.22636 74.7896 2.19047 74.6819L1.9392 73.3C1.92125 73.1923 1.9392 73.0846 2.02893 73.0128L8.66964 67.3054L1.29307 68.6874C1.16744 68.7053 1.05975 68.6335 1.0418 68.5079L0.826429 67.3772C0.808481 67.2695 0.880273 67.1618 1.00591 67.1438Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M5.47496 56.1233C8.31072 56.0694 10.5542 57.8463 10.626 61.3281L10.6619 63.8947C10.6619 64.0203 10.5721 64.11 10.4465 64.11L0.772624 64.2716C0.646989 64.2716 0.557249 64.1818 0.557249 64.0562L0.503406 61.4897C0.449562 58.0078 2.62125 56.1771 5.47496 56.1233ZM5.49291 57.7206C3.21353 57.7565 1.86744 59.0129 1.92129 61.4717L1.93923 62.6922L9.22606 62.5665L9.20811 61.3461C9.15427 58.8872 7.77228 57.6668 5.49291 57.7206Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M10.3567 49.6444L11.3259 49.7879C11.4515 49.8059 11.5233 49.9136 11.5054 50.0392L10.7874 54.8492C10.7695 54.9749 10.6618 55.0467 10.5362 55.0287L0.952029 53.6108C0.826394 53.5929 0.754603 53.4852 0.77255 53.3596L0.934081 52.2288C0.952029 52.1032 1.05972 52.0314 1.18535 52.0494L9.56699 53.2878L10.0875 49.8059C10.1413 49.6982 10.2311 49.6264 10.3567 49.6444Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M3.82375 40.599L7.89791 44.7988L12.331 46.0013C12.4567 46.0372 12.5105 46.1449 12.4746 46.2705L12.1695 47.3653C12.1336 47.491 12.0259 47.5448 11.9003 47.5089L7.50306 46.3244L1.84949 47.8679C1.67001 47.9038 1.59822 47.832 1.63411 47.6525L1.95717 46.5038C1.99307 46.3961 2.04691 46.3243 2.17255 46.2885L6.30055 45.1757L3.30326 42.1246C3.21352 42.0348 3.19557 41.9451 3.23147 41.8374L3.55453 40.6708C3.59043 40.5092 3.69811 40.4734 3.82375 40.599Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M9.33375 28.8432L10.1952 29.3099C10.3029 29.3637 10.3388 29.4894 10.285 29.597L9.22606 31.5713L16.6924 35.5916C16.8001 35.6455 16.8359 35.7711 16.7821 35.8788L16.2437 36.8839C16.1898 36.9916 16.0642 37.0274 15.9565 36.9736L8.4902 32.9533L7.43128 34.9276C7.37743 35.0352 7.2518 35.0711 7.14411 35.0173L6.28261 34.5506C6.17493 34.4968 6.13903 34.3712 6.19287 34.2635L9.06453 28.933C9.10043 28.8073 9.22606 28.7714 9.33375 28.8432Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M20.9816 27.4613L21.7713 28.0356C21.879 28.1074 21.8969 28.2331 21.8251 28.3408L18.774 32.5047C18.7022 32.6123 18.5766 32.6303 18.4689 32.5585L10.6616 26.8331C10.5539 26.7613 10.536 26.6357 10.6077 26.528L13.6589 22.3821C13.7307 22.2744 13.8563 22.2564 13.964 22.3282L14.7537 22.9026C14.8614 22.9744 14.8793 23.1 14.8075 23.2077L12.5641 26.2588L14.7357 27.8562L16.8356 24.9845C16.9074 24.8768 17.0331 24.8589 17.1408 24.9307L17.9305 25.505C18.0382 25.5768 18.0561 25.7024 17.9843 25.8101L15.8844 28.6818L18.433 30.5483L20.6765 27.4793C20.7483 27.3895 20.8739 27.3716 20.9816 27.4613Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M28.2687 21.6635L27.4431 22.4891C27.3534 22.5789 27.2636 22.5968 27.138 22.543L25.2714 21.6276L22.328 24.5531L23.2253 26.4197C23.2792 26.5453 23.2612 26.6351 23.1715 26.7069L22.3459 27.5325C22.2382 27.6402 22.1126 27.6222 22.0587 27.4786L17.7333 18.1278C17.6795 18.0201 17.7154 17.8945 17.7872 17.8227L18.5589 17.0509C18.6486 16.9612 18.7563 16.9432 18.864 16.9971L28.2148 21.3764C28.3584 21.4302 28.3943 21.5379 28.2687 21.6635ZM23.9792 20.9815L19.5999 18.8457L21.7177 23.2429L23.9792 20.9815Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M32.1811 7.05381L37.4757 15.1662C37.5475 15.2739 37.5296 15.3996 37.404 15.4713L36.4527 16.0995C36.345 16.1713 36.2194 16.1534 36.1476 16.0277L32.4324 10.3383L33.7964 17.6071C33.8144 17.7328 33.7785 17.8225 33.6708 17.8943L32.7734 18.4866C32.6837 18.5584 32.558 18.5584 32.4683 18.4866L26.4199 14.3586L30.0992 19.9763C30.171 20.0839 30.153 20.2096 30.0274 20.2814L29.0761 20.9095C28.9685 20.9813 28.8428 20.9634 28.771 20.8378L23.4764 12.7253C23.4046 12.6176 23.4226 12.492 23.5482 12.4202L24.6969 11.6664C24.7866 11.5946 24.8943 11.5767 25.002 11.6485L32.2529 16.6739L30.5658 8.00504C30.5479 7.89735 30.6017 7.80761 30.7094 7.73582L31.876 6.96407C31.9837 6.92817 32.1093 6.94612 32.1811 7.05381Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="120.9" height="120.5" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>   
              <div className="Second-Childs-Galery-Left">
                <div className="Childs-Galery-Left-img">
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 3000, disableOnInteraction: false}} pagination={{clickable: false}} navigation={false} modules={[Autoplay, Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <figure>
                    <img src={Galerfirst} alt="" />
                      <a href="#11" id="pop-up-Second" onClick={onPopClick}>
                        <svg
                          className="hov-img"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <rect
                            width="32"
                            height="32"
                            rx="16"
                            fill="#FFFFFF"
                            fillOpacity="0.3"
                          ></rect>
                          <path
                            d="M9 23H17M23 9H15H23ZM23 9V17V9ZM23 9L9 23L23 9ZM9 23V15V23Z"
                            stroke="#FFFFFF"
                            strokeWidth="2px"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          ></path>
                        </svg>
                      </a>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure>
                  <img src={GalerFirstTwo} alt="" />
                   <a href="#11">
                  <svg
                    className="hov-img"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#FFFFFF"
                      fillOpacity="0.3"
                    ></rect>
                    <path
                      d="M9 23H17M23 9H15H23ZM23 9V17V9ZM23 9L9 23L23 9ZM9 23V15V23Z"
                      stroke="#FFFFFF"
                      strokeWidth="2px"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></path>
                  </svg>
                </a>
                    </figure>
                  </SwiperSlide>
                </Swiper> 
            </div>
            <div className="Second-Child-Galery-footer-text">
              <div className="hr-style"></div>
              <article className="Second-Footer-Text">
                <span>10</span>{" "}
                <p>
                  {t("secondPage_left")}
                </p>{" "}
              </article>
            </div>
              </div>
              <div className="Second-Childs-Galery-Right">
                <div className="Childs-Galery-Right-img">
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 3000, disableOnInteraction: false}} pagination={{clickable: false}} navigation={false} modules={[Autoplay, Navigation]} className="mySwiper">
                  <SwiperSlide>
                     <figure>
                    <img src={GalerSecond} alt="" />
                    <a href="#11">
                      <svg
                        className="hov-img"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#FFFFFF"
                          fillOpacity="0.3"
                        ></rect>
                        <path
                          d="M9 23H17M23 9H15H23ZM23 9V17V9ZM23 9L9 23L23 9ZM9 23V15V23Z"
                          stroke="#FFFFFF"
                          strokeWidth="2px"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                      </svg>
                    </a>
                      </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                  <figure>
                    <img src={GalerySecondTwo} alt="" />
                    <a href="#11">
                      <svg
                        className="hov-img"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="#FFFFFF"
                          fillOpacity="0.3"
                        ></rect>
                        <path
                          d="M9 23H17M23 9H15H23ZM23 9V17V9ZM23 9L9 23L23 9ZM9 23V15V23Z"
                          stroke="#FFFFFF"
                          strokeWidth="2px"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                      </svg>
                    </a>
                  </figure>
                  </SwiperSlide>
                </Swiper> 
                  
                </div>
              </div>
            </div>
            <div className="Second-Page-Child-Right">
              <div className="Second-Page-Child-Right-Box">
                <div className="title-second-page">
                  <p></p>
                  <span>{t("secondPage_title_top")}</span>
                </div>
                <h1 className="title">{t("about")}</h1>
                <article className="title-text">
                  <p>
                    {t("secondPage_title")}
                  </p>
                  <p>
                   {t("secondPage_title1")}
                  </p>
                </article>
                <div className="Second-Page-Quick-Sort">
                  <div className="Quick-Sort-Left">
                    <img src={QuicSolutions} alt="" />
                    <p className="icon-bottom-text">{t("secondPage_left_child")}</p>
                  </div>
                  <div className="Quick-Sort-Right">
                    <img src={UniqueProjects} alt="" />
                    <p className="icon-bottom-text">{t("secondPage_right_child")}</p>
                  </div>
                </div>
                <div className="Second-Page-btn">
                    <a href="#2">
                      <button className="btn-anim">
                        <span>
                          Portfolio
                          <svg className="second-animation" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#FFFFFF"
                              fillOpacity="0.3"
                            ></rect>
                            <path
                              d="M16.1843 14.5534L16.3807 7.28596L6.95266 16.7141M9.11326 7.48238L16.3807 7.28596L9.11326 7.48238Z"
                              stroke="#FFFFFF"
                              strokeWidth="1.6px"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </a>
                    <a href="#4">
                      <button className="btn">
                        <span>
                          {t("callHome")}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#FFFFFF"
                              fillOpacity="0.3"
                            ></rect>
                            <path
                              d="M12.9695 13.6577C12.7326 13.8944 12.4957 14.2495 12.3181 14.5455C11.2522 13.7168 10.3047 12.7106 9.47566 11.7044C9.83097 11.5269 10.1271 11.2901 10.3639 11.0534C11.5483 9.86958 11.1337 8.33068 9.9494 7.14691C8.76506 5.96314 7.28463 5.48963 6.04107 6.73259C4.7975 7.97555 4.67907 10.1063 5.62655 11.4677C7.34384 14.072 9.9494 16.6763 12.555 18.3927C13.9762 19.3398 16.108 19.1622 17.2923 17.9784C18.4767 16.7946 18.0622 15.2557 16.8778 14.072C15.6935 12.8882 14.1538 12.4147 12.9695 13.6577Z"
                              stroke="#FFFFFF"
                              strokeWidth="1.6px"
                              strokeMiterlimit="10"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                            <path
                              d="M19 11C19 7.66667 16.3333 5 13 5"
                              stroke="#FFFFFF"
                              strokeWidth="1.6px"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                            <path
                              d="M16 11C16 9.34043 14.6531 8 13 8"
                              stroke="#FFFFFF"
                              strokeWidth="1.6px"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SecondPage;