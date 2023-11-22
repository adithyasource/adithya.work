import { useState } from "react";
import parse from "html-react-parser";

export default function EmbeddedWork(props) {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {showEmbed ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${props.vidId}?rel=0`}
          allowfullscreen
          className="w-full h-full aspect-video"></iframe>
      ) : (
        <button
          onClick={() => {
            setShowEmbed(true);
          }}>
          <img
            src={`https://i.ytimg.com/vi/${props.thumbId}/maxresdefault.jpg`}
            alt=""
          />
        </button>
      )}

      <i>{props.title}</i>
      <p>{parse(props.desc)}</p>
    </div>
  );
}
