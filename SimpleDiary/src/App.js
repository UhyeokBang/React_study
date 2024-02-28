import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useCallback, useMemo, useEffect, useState, useRef } from "react";

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

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    };
    setData((data) => [newItem, ...data]);
    /*setData([newItem, ...data]); 이렇게 해버리면 기존 빈배열 data(새로 생성될때 그상태)
    에 방금 추가한 데이터 한개만 남게 된다. 이걸 방지하기 위해 함수형으로 setData를 한것임.*/
    dataId.current++;
  }, []);
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

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.legth - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <div>전체일기: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
