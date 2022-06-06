import React from "react";

const Text = ({ members }) => {
  return (
    <section className="text-container">
      <p>
        <span>PAIR1</span> - <span>{members[0]}</span>님,{" "}
        <span>{members[1]}</span>님
      </p>
      <p>
        <span>PAIR2</span> - <span>{members[2]}</span>님,{" "}
        <span>{members[3]}</span>님
      </p>
      <p>
        <span>PAIR3</span> - <span>{members[4]}</span>님,{" "}
        <span>{members[5]}</span>님
      </p>
      <p>
        <span>PAIR4</span> - <span>{members[6]}</span>님,{" "}
        <span>{members[7]}</span>님, <span>{members[8]}</span>님
      </p>
    </section>
  );
};

export default Text;
