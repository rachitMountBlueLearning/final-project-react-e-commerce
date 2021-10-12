import React from "react";

function Title({ name, title }) {
  return (
      <div className="title">
        <h3>
          {name}
          <strong>{title}</strong>
        </h3>
      </div>
  );
}

export default Title;
