import React from "react";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const CounterProps = {
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <Container>
      <div>
        <Counter {...CounterProps} />
      </div>
    </Container>
  );
}

export default App;
