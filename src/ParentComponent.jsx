import React from "react";
import MessageDisplay from "./MessageDisplay";

function ParentComponent() {
  const message = "Hello from the parent component!";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>c. React Props Example</h2>

      <MessageDisplay message={message} />
    </div>
  );
}

export default ParentComponent;