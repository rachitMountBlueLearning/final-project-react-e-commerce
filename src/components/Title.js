import React from "react";

function Title({ name, title }) {
  return (
      <h3 className="title">
        {name}
        <strong>{title}</strong>
      </h3>
  );
}

export default Title;
