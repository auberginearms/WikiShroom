export function ImageText(props: {
  text: string;
  image: string;
  onClickResult: () => void;
}) {
  return (
    <button
      style={{ display: "flex", flexDirection: "column" }}
      onClick={() => {
        props.onClickResult();
      }}
    >
      <img src={props.image}></img>
      {props.text}
    </button>
  );
}
