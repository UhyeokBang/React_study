import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("UnMount");
    };
  }, []);
  return <div>UnMountTesting component</div>;
};
const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ paddig: 20 }}>
      <button
        onClick={() => {
          toggle();
        }}
      >
        On/Off
      </button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default Lifecycle;
