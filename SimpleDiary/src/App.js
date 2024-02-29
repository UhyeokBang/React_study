import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useCallback, useMemo, useEffect, useRef, useReducer } from "react";

const reducer = (diaryListData, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data.initData;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      return [
        { id: action.data.id, ...action.data, created_date },
        ...diaryListData,
      ];
    }
    case "DELETE": {
      return diaryListData.filter((it) => it.id !== action.data.targetId);
    }
    case "EDIT": {
      return diaryListData.map((it) =>
        it.id === action.data.targetId
          ? { ...it, content: action.data.localContent }
          : it
      );
    }
    default: {
      return diaryListData;
    }
  }
};

function App() {
  const dataId = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);

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
    dispatch({ type: "INIT", data: { initData } });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { id: dataId.current, author, content, emotion },
    });
    //setData((data) => [newItem, ...data]);
    //중요한점은 매개변수로 받는 인자여야만 최신상태로 받을 수 있는것이다.
    /*setData([newItem, ...data]); 이렇게 해버리면 기존 빈배열 data(새로 생성될때 그상태)
    에 방금 추가한 데이터 한개만 남게 된다. 이걸 방지하기 위해 함수형으로 setData를 한것임.*/
    dataId.current++;
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", data: { targetId } });
    // setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, localContent) => {
    dispatch({ type: "EDIT", data: { targetId, localContent } });
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.legth - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, goodRatio } = getDiaryAnalysis;

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <div>전체일기: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {data.length - goodCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
