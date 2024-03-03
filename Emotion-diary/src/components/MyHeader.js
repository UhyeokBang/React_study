const MyHeader = ({ headText, LeftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{LeftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
