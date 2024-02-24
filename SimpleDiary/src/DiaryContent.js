import { useRef, useState } from "react";
const DiaryContent = ({
  content,
  onDelete,
  id,
  isEdit,
  editToggle,
  onEdit,
}) => {
  const [localContent, setLocalContent] = useState("");
  const localContentInput = useRef();

  const handleLocalContent = (e) => {
    setLocalContent(e.target.value);
  };
  const handleEditQuit = () => {
    editToggle();
    setLocalContent(content);
  };
  const handleEditDone = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      editToggle();
    }
  };
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };
  const handleEdit = () => {
    setLocalContent(content);
    editToggle();
  };

  if (isEdit) {
    return (
      <>
        <textarea
          ref={localContentInput}
          value={localContent}
          onChange={handleLocalContent}
        />
        <div>
          <button onClick={handleEditQuit}>수정취소</button>
          <button onClick={handleEditDone}>수정완료</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="content">{content}</div>
        <button onClick={handleRemove}>삭제하기</button>
        <button onClick={handleEdit}>수정하기</button>
      </>
    );
  }
};

export default DiaryContent;
