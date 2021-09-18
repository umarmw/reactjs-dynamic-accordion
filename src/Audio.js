const Audio = (props) => {
  const { title, track } = props;

  return (
    <div className="audio">
      <div className="audio-title">
        <b> {title}</b>
      </div>
      <div className="audio-track">
        <i> {track}</i>
      </div>
    </div>
  );
};
export default Audio;
