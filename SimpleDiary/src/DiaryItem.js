import React, { useRef, useState } from "react";
// const areEqual = (prevProps, nextProps) => {
//   return prevProps.content.length === nextProps.content.length;
// };
const DiaryItem = ({
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const localContentTextArea = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };
  const handleLocalContent = (e) => {
    setLocalContent(e.target.value);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleEditCancel = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleEditDone = () => {
    if (localContent.length < 5) {
      localContentTextArea.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      setIsEdit(false);
    }
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
          <textarea
            ref={localContentTextArea}
            value={localContent}
            onChange={handleLocalContent}
          />
        </>
      ) : (
        <>
          <div className="content">{content}</div>
        </>
      )}
      {isEdit ? (
        <div>
          <button onClick={handleEditCancel}>수정취소</button>
          <button onClick={handleEditDone}>수정완료</button>
        </div>
      ) : (
        <div>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={handleEdit}>수정하기</button>
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
