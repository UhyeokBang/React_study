import { useState } from "react";
const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  const [localContent, setLocalContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };
  const handleLocalContent = () => {
    setLocalContent(localContent);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      {isEdit ? (
        <>
          <textarea value={localContent} onChange={handleLocalContent} />
        </>
      ) : (
        <>
          <div className="content">{content}</div>
        </>
      )}
      {isEdit ? (
        <>
          <button onClick={handleRemove}>수정취소</button>
          <button onClick={handleEditDone}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={handleEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
