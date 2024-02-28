import React, { useState, useEffect } from "react";

const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`update count: ${count}`);
  });
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
});

const ObjView = ({ obj }) => {
  useEffect(() => {
    console.log(`update obj: ${obj.count}`);
  });
  return (
    <div>
      <h2>{obj.count}</h2>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
};

const MemorizedObjView = React.memo(ObjView, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 20 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <MemorizedObjView obj={obj} />
        <button value={obj.count} onClick={() => setObj({ count: obj.count })}>
          +
        </button>
      </div>
    </div>
  );
};
export default OptimizeTest;
