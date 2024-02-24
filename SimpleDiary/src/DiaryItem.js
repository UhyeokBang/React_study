import { useState } from "react";
import DiaryContent from "./DiaryContent.js";
const DiaryItem = ({
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const editToggle = () => setIsEdit(!isEdit);
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <DiaryContent
        onEdit={onEdit}
        onDelete={onDelete}
        id={id}
        isEdit={isEdit}
        editToggle={editToggle}
        content={content}
      />
      {/* {isEdit ? (
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
      )} */}
    </div>
  );
};

export default DiaryItem;
