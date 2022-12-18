import React, { useState } from "react";

export default function Docs() {
  const [aa, ss] = useState(5);
  return (
    <div>
      <h1>Docs</h1>
      {aa}
    </div>
  );
}
