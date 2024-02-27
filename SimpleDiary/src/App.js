import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useEffect, useState, useRef } from "react";

function App() {
  const dataId = useRef(0);
  const [data, setData] = useState([]);
  //https://jsonplaceholder.typicode.com/comments
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.mail,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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
    dataId.current++;
  };
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId, localContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: localContent } : it
      )
    );
  };

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
