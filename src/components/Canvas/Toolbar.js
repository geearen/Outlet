function Toolbar({ handleColor, handleWidth }) {
  return (
    <div className="toolbar">
      <div className="toolbar__color">
        <input type="color" onChange={handleColor} className="color-option" />
      </div>

      <div className="toolbar__size">
        <input
          type="range"
          defaultValue="5"
          min="5"
          max="100"
          onChange={handleWidth}
        />
      </div>
    </div>
  );
}

export default Toolbar;
