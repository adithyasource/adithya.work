import { useState } from "react";

import wallpaper from "./assets/wallpaper.png";
import discord from "./assets/discord.svg";
import instagram from "./assets/instagram.svg";
import email from "./assets/email.svg";
import files from "./assets/files.svg";
import page from "./assets/page.svg";

import image6 from "./assets/brandlogos/image 6.png";
import image7 from "./assets/brandlogos/image 7.png";
import image8 from "./assets/brandlogos/image 8.png";
import image9 from "./assets/brandlogos/image 9.png";
import image10 from "./assets/brandlogos/image 10.png";
import image11 from "./assets/brandlogos/image 11.png";
import image12 from "./assets/brandlogos/image 12.png";
import image13 from "./assets/brandlogos/image 13.png";
import image14 from "./assets/brandlogos/image 14.png";
import image15 from "./assets/brandlogos/image 15.png";

import Draggable from "react-draggable";
import LinkedWork from "./components/LinkedWork";
import EmbeddedWork from "./components/EmbeddedWork";

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [currentPortfolioTab, setCurrentPortfolioTab] = useState("ads/mvs");
  const [showSuccessfulCopy, setShowSuccessfulCopy] = useState(false);

  const [showGoldenAge, setShowGoldenAge] = useState(false);
  const [showContrast, setShowContrast] = useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      setShowAbout(false);
      setShowPortfolio(false);
      setShowContrast(false);
      setShowGoldenAge(false);
    }
  });

  return (
    <div className="overflow-hidden w-full h-full">
      <img
        src={wallpaper}
        alt=""
        className="absolute w-screen h-screen -z-20"
      />

      <div className="absolute bottom-10 left-[calc(50%-128px)] flex gap-4 w-max bg-[#1b1b1b2c] px-4 py-3 rounded-[25px] backdrop-blur-[100px] border border-solid border-[#ffffff1A]">
        <a
          href="https://discord.com/users/427117308880748544"
          target="_blank"
          rel="noreferrer noopener">
          <img src={discord} alt="" className="w-[64px] h-[64px]" />
        </a>
        <a
          href="https://www.instagram.com/sreeadithyap/"
          target="_blank"
          rel="noreferrer noopener">
          <img src={instagram} alt="" className="w-[64px] h-[64px]" />
        </a>

        <button
          className="group relative"
          onClick={() => {
            navigator.clipboard.writeText("me@adithya.work");
            setShowSuccessfulCopy(true);

            setTimeout(() => {
              setShowSuccessfulCopy(false);
            }, 800);
          }}>
          {showSuccessfulCopy ? (
            <p className="hidden group-hover:block absolute top-[-55px] left-[-4px] bg-[#1b1b1b2c] px-3 py-1 rounded-[6px] backdrop-blur-[10px] border border-solid border-[#ffffff1A] z-[1000] w-max">
              copied
            </p>
          ) : (
            <p className="hidden group-hover:block absolute top-[-55px] left-[-40px] bg-[#1b1b1b2c] px-3 py-1 rounded-[6px] backdrop-blur-[10px] border border-solid border-[#ffffff1A] z-[1000] w-max">
              me@adithya.work
            </p>
          )}

          <img src={email} alt="" className="w-[64px] h-[64px] " />
        </button>
      </div>

      <div className="flex gap-28 absolute right-72 top-48 z-[-15]">
        <button
          className="flex flex-col items-center gap-2"
          onClick={() => {
            setShowPortfolio(true);
            setCurrentPortfolioTab("ads/mvs");
          }}>
          <img src={files} alt="" className="h-28" />
          <p>portfolio</p>
        </button>
        <button
          className="flex flex-col items-center gap-2"
          onClick={() => {
            setShowAbout(true);
          }}>
          <img src={page} alt="" className="h-28" />
          <p>about</p>
        </button>
      </div>

      {showGoldenAge ? (
        <Draggable handle=".handle">
          <div className=" z-[-5] absolute left-[20vw] top-[4vh] flex flex-col w-[20vw] max-h-[80vh] rounded-[25px] border border-solid border-[#ffffff1A] overflow-clip">
            <div className="handle h-[4vh] items-center bg-[#2c2c2cb4] flex backdrop-blur-[100px] p-4 cursor-grab">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowGoldenAge(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6862" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setShowGoldenAge(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FEBC2C" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setShowGoldenAge(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#2CC740" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-y-scroll bg-[#1e1e1eda] backdrop-blur-[100px] p-4 flex flex-col gap-6">
              <a
                href="https://www.instagram.com/p/CsB_FmKpmnb/"
                target="_blank"
                rel="noreferrer noopener">
                <img
                  src="https://cdn.discordapp.com/attachments/752463623305297992/1176917791564124241/image05.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/p/CsFiNsmAwnf/"
                target="_blank"
                rel="noreferrer noopener">
                <img
                  src="https://cdn.discordapp.com/attachments/752463623305297992/1176918699802906760/image04.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      {showContrast ? (
        <Draggable handle=".handle">
          <div className=" z-[-5] absolute left-[20vw] top-[4vh] flex flex-col w-[20vw] max-h-[80vh] rounded-[25px] border border-solid border-[#ffffff1A] overflow-clip">
            <div className="handle h-[4vh] items-center bg-[#2c2c2cb4] flex backdrop-blur-[100px] p-4 cursor-grab">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowContrast(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6862" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setShowContrast(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FEBC2C" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setShowContrast(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#2CC740" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-y-scroll bg-[#1e1e1eda] backdrop-blur-[100px] p-4 flex flex-col gap-6">
              <iframe
                className="w-full h-auto aspect-[9/16]"
                src="https://www.youtube-nocookie.com/embed/59Fgds0scBo?si=X5TAjTuEcsrZF3SW&amp;controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <iframe
                className="w-full h-auto aspect-[9/16]"
                src="https://www.youtube-nocookie.com/embed/yxcFB_xbvr8?si=X5TAjTuEcsrZF3SW&amp;controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <iframe
                className="w-full h-auto aspect-[9/16]"
                src="https://www.youtube-nocookie.com/embed/RwUy-yfW6oM?si=X5TAjTuEcsrZF3SW&amp;controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <iframe
                className="w-full h-auto aspect-[9/16]"
                src="https://www.youtube-nocookie.com/embed/fViVyHWhmmw?si=X5TAjTuEcsrZF3SW&amp;controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      {showPortfolio ? (
        <Draggable handle=".handle">
          <div className=" z-[-10] absolute left-[20vw] top-[4vh] flex w-[60vw] max-h-[80vh] rounded-[25px] border border-solid border-[#ffffff1A] overflow-clip ">
            <div className="handle w-[20vw] bg-[#2c2c2cb4]  backdrop-blur-[100px] p-4 cursor-grab">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowPortfolio(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6862" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setShowPortfolio(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FEBC2C" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setShowPortfolio(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#2CC740" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <p className="opacity-50 ">Favorites</p>

                <button
                  className={`${
                    currentPortfolioTab == "ads/mvs"
                      ? "bg-[#4c4c4ca4]"
                      : "bg-transparent"
                  } w-full flex items-center justify-between py-2 px-4 rounded-[10px]`}
                  onClick={() => {
                    setCurrentPortfolioTab("ads/mvs");
                  }}>
                  <p>ads / mvs</p>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </button>
                <button
                  className={`${
                    currentPortfolioTab == "showreel"
                      ? "bg-[#4c4c4ca4]"
                      : "bg-transparent"
                  } w-full flex items-center justify-between py-2 px-4 rounded-[10px]`}
                  onClick={() => {
                    setCurrentPortfolioTab("showreel");
                  }}>
                  <p>showreel.mp4</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 21V3L19 12L5 21Z"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </button>
                <button
                  className={`${
                    currentPortfolioTab == "misc"
                      ? "bg-[#4c4c4ca4]"
                      : "bg-transparent"
                  } w-full flex items-center justify-between py-2 px-4 rounded-[10px]`}
                  onClick={() => {
                    setCurrentPortfolioTab("misc");
                  }}>
                  <p>misc</p>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </button>
                <button
                  className={`${
                    currentPortfolioTab == "youtube"
                      ? "bg-[#4c4c4ca4]"
                      : "bg-transparent"
                  } w-full flex items-center justify-between py-2 px-4 rounded-[10px]`}
                  onClick={() => {
                    setCurrentPortfolioTab("youtube");
                  }}>
                  <p>youtube</p>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-scroll bg-[#1e1e1eda] w-full backdrop-blur-[100px]">
              {currentPortfolioTab == "ads/mvs" ? (
                <div className="flex flex-col gap-8">
                  <LinkedWork
                    vidId="dF5wKgA_fDM"
                    thumbId="5QzQHY2emqU"
                    title="Travis Scott & Quavo - Go (Limbow Flip)"
                    desc=""
                  />
                  <EmbeddedWork
                    vidId="I3xWnr1sgwQ"
                    thumbId="I3xWnr1sgwQ"
                    title="ILLVZN X ONLYTHEBLIND"
                    desc="<div>
                            My edit for the streetwear brand <a href='https://www.illvzn.com/' target='_blank' rel='noopener
                              noreferrer'>ILLVZN</a> X <a href='https://www.onlytheblind.com/' target='_blank' rel='noopener
                              noreferrer'>ONLYTHEBLIND</a> collab promo video, hosted by <a href='https://www.youtube.com/user/TBJZL'
                              target='_blank' rel='noopener noreferrer'>TBJZL</a> and Konstantin. <br />
                            Filled with simple yet effective effects leading to bigger sequences of absolute eye candy. <br />
                            Edit/VFX: Me <br />
                            Director/Videographer: <a href='https://www.youtube.com/channel/UChKVhjGmPAu7eWa2ITDd50w' target='_blank'
                              rel='noopener noreferrer'>Konstantin</a> <br />
                          </div>"
                  />

                  <div className="flex flex-col gap-2">
                    <button
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setShowGoldenAge(true);
                      }}>
                      <img
                        className="w-[43vw]"
                        src="https://cdn.discordapp.com/attachments/752463623305297992/1125793726153891890/satoumilk_XT304508_2023-05-13_12.31.26_1.jpg"
                      />
                    </button>
                    <i>GOLDENAGE.JP 黄金時代 Brand Creatives</i>
                    <p>
                      A set of highly stylized instagram reels for GOLDENAGE, a
                      Japanese anime streetwear clothing brand.
                    </p>
                  </div>

                  <EmbeddedWork
                    vidId="PtFClCgIQZ0"
                    thumbId="PtFClCgIQZ0"
                    title="Cradle Wallet Hype Video"
                    desc="An animated hype video showcasing the Cradle Wallet's gamer centric features. Consists of a large amount of motion graphics along with 3d camera animation."
                  />

                  <div className="flex flex-col gap-2">
                    <button
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setShowContrast(true);
                      }}>
                      <img
                        className="w-[43vw]"
                        src="https://i.ytimg.com/vi/xbiPDERu-uo/maxresdefault.jpg"
                      />
                    </button>
                    <i>Reels X Contrast Mag</i>
                    <p>
                      Graphic posters turned into aesthetic, short and engaging
                      motion videos. Made in collaboration with GIPHME™
                    </p>
                  </div>

                  <LinkedWork
                    vidId="ZvW2x-VC7-o"
                    thumbId="ZvW2x-VC7-o"
                    title="Trippie Redd - Miss The Rage ft. Playboi Carti (Pozy Remix)"
                    desc=""
                  />
                  <EmbeddedWork
                    vidId="iFXZUAONLEI"
                    thumbId="iFXZUAONLEI"
                    title="BLACKBIRN© - GAS COL."
                    desc=""
                  />
                </div>
              ) : (
                <></>
              )}

              {currentPortfolioTab == "showreel" ? (
                <div className="flex flex-col gap-8">
                  <EmbeddedWork
                    vidId="UK1jWuUXQYo"
                    thumbId="UK1jWuUXQYo"
                    title=""
                    desc=""
                  />
                </div>
              ) : (
                <></>
              )}
              {currentPortfolioTab == "misc" ? (
                <div className="flex flex-col gap-8">
                  <LinkedWork
                    vidId="hcZpa4DLSFQ"
                    thumbId="gXPSfde9YZU"
                    title="Tommee Profitt - In The End ft. Fleurie (Emurse Remix)"
                    desc=""
                  />
                  <LinkedWork
                    vidId="9RriQbnddsw"
                    thumbId="9RriQbnddsw"
                    title="HIGHSOCIETY - Visions"
                    desc=""
                  />
                  <EmbeddedWork
                    vidId="ulx3ttQ4IHE"
                    thumbId="ulx3ttQ4IHE"
                    title="Sui Generis - North Hills"
                    desc=""
                  />
                  <LinkedWork
                    vidId="B9Eg0R0elkc"
                    thumbId="B9Eg0R0elkc"
                    title="Fabian Mazur x Snavs - The Pit (Music Video)"
                    desc=""
                  />
                  <LinkedWork
                    vidId="WYR_rk8pPW4"
                    thumbId="WYR_rk8pPW4"
                    title="Kosfinger - Around The World / Lalala (Drill Remix)"
                    desc=""
                  />
                  <LinkedWork
                    vidId="6XgIMpeO-8w"
                    thumbId="6XgIMpeO-8w"
                    title="Onderkoffer - Purge (Official Visualizer)"
                    desc="<div>
                            A gritty-fast paced visualizer for Onderkoffer's latest remix- PURGE. <br />
                            background visuals by me <br />
                            3d animation by <a href='https://www.instagram.com/madebyjohnkho/' target='_blank' rel='noopener noreferrer'>@madebyjohnkho</a>
                          </div>"
                  />
                  <LinkedWork
                    vidId="mHb_f6OdJmw"
                    thumbId="mHb_f6OdJmw"
                    title="Attack on Titan 「AMV」 - The Rumbling (Onderkoffer Trap Remix)"
                    desc="<div>
                          An anime music video edited in collaboration with <a href='https://www.instagram.com/theforestname/' target='_blank'
                            rel='noopener noreferrer'>@theforestname</a>. Original remix by <a href='https://www.instagram.com/onderkoffer/'
                            target='_blank' rel='noopener noreferrer'>Onderkoffer</a>. Commissioned by <a
                            href='https://www.youtube.com/trapcity' target='_blank' rel='noopener noreferrer'>TrapCity</a>
                          Made under an extremely tight timeline in order to release it in under 24 hours of S4 Part 2 being released.
                        </div>"
                  />
                </div>
              ) : (
                <></>
              )}
              {currentPortfolioTab == "youtube" ? (
                <div className="flex flex-col gap-8">
                  <LinkedWork
                    vidId="LXE_NaN905k"
                    thumbId="LXE_NaN905k"
                    title="I Made 7 Apps But... With ONLY 7 Hours of Coding!"
                    desc=""
                  />
                  <LinkedWork
                    vidId="wQfblkSqp2k"
                    thumbId="wQfblkSqp2k"
                    title="Why you should REALLY Learn To Code"
                    desc=""
                  />
                  <LinkedWork
                    vidId="uUpUC44i1pY"
                    thumbId="4HZnATNK_f4"
                    title="DON'T Give Programmers A New Code Editor 😬"
                    desc=""
                  />
                  <LinkedWork
                    vidId="x7ZtNW2HQu8"
                    thumbId="x7ZtNW2HQu8"
                    title="Coding on a PLANE for 12 Hours"
                    desc=""
                  />
                  <LinkedWork
                    vidId="M4pQOjCFJXg"
                    thumbId="M4pQOjCFJXg"
                    title="Are Ultrawide Monitors Worth It For Coding?"
                    desc=""
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}

      {showAbout ? (
        <Draggable handle=".handle">
          <div className=" h-max  z-[1000]  absolute left-[35vw] top-[30vh] flex flex-col w-[28vw] rounded-[25px] border border-solid border-[#ffffff1A] overflow-clip">
            <div className="handle h-[4vh] bg-[#2c2c2cb4] items-center relative flex backdrop-blur-[100px] p-4 cursor-grab">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowAbout(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6862" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setShowAbout(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FEBC2C" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setShowAbout(false);
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#2CC740" />
                  </svg>
                </button>
              </div>

              <p className="absolute left-[calc(50%-48px)] opacity-50">
                about me.txt
              </p>
            </div>
            <div className="bg-[#1e1e1eda] w-full h-full backdrop-blur-[100px] p-4 flex flex-col gap-10">
              <p>
                hey! i’m sree adithya and i create things on the web ~ currently
                editing videos for brands and youtubers, available for taking on
                projects ^-^ email me@adithya.work
              </p>

              <div className="flex flex-wrap gap-3">
                <img src={image6} alt="" />
                <img src={image7} alt="" />
                <img src={image8} alt="" />
                <img src={image9} alt="" />
                <img src={image10} alt="" />
                <img src={image11} alt="" />
                <img src={image12} alt="" />
                <img src={image13} alt="" />
                <img src={image14} alt="" />
                <img src={image15} alt="" />
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <></>
      )}
    </div>
  );
}
