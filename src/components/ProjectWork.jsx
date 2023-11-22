import Draggable from "react-draggable";

export default function ProjectWork() {
  return (
    <div className="overflow-hidden w-full h-full">
      <Draggable handle=".handle">
        <div className=" h-max  z-[1000]  absolute left-[35vw] top-[30vh] flex flex-col w-[28vw] rounded-[25px] border border-solid border-[#ffffff1A] overflow-clip">
          <div className="handle h-[4vh] bg-[#2c2c2cb4] items-center relative flex backdrop-blur-[100px] p-4 cursor-grab">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  // setShowAbout(false);
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
                  // setShowAbout(false);
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
                  // setShowAbout(false);
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

            <div className="flex flex-wrap gap-3"></div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
