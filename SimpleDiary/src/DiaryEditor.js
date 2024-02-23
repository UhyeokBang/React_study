import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          vlaue={state.author}
          onChange={(e) => {
            setState({
              ...state,
              author: e.target.value,
            });
          }}
        ></input>
      </div>
      <div>
        <textarea
          vlaue={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
