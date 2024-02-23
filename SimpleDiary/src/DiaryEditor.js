import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          vlaue={state.author}
          onchange={handleChangeState}
        ></input>
      </div>
      <div>
        <textarea
          name="content"
          vlaue={state.content}
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
