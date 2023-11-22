import parse from "html-react-parser";

export default function LinkedWork(props) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={`https://www.youtube.com/watch?v=${props.vidId}`}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="w-[43vw]"
          src={`https://i.ytimg.com/vi/${props.thumbId}/maxresdefault.jpg`}
        />
      </a>
      <i>{props.title}</i>
      <p>{parse(props.desc)}</p>
    </div>
  );
}
