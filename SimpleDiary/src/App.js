import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "방우혁",
//     content: "hello 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "정도겸",
//     content: "hello 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "최지우",
//     content: "hello 3",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];
function App() {
  const dataId = useRef(0);
  const [data, setData] = useState([]);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    };
    setData([newItem, ...data]);
  };
  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
