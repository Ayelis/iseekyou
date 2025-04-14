const handleMin = () => {
  window.close();
};

const handleClose = () => {
  window.close();
};

// For Electron security, use window.electron instead of require
const TitleBar = () => {
  return (
    <div className="titlebar">
      <span className="title">3674663</span>
      <div className="buttons">
        <button onClick={handleMin} className="min button">_</button>
        <button onClick={handleClose} className="close button">X</button>
      </div>
    </div>
  );
};

export default TitleBar;
