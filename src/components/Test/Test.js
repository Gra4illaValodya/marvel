import { useState } from "react";
import "./Test.scss";

const Test = () => {
  const ID = () => {
    const min = 1009150;
    const max = 1011334;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random);
  };
  ID();
  const matchText = (text, filter) => {
    // if (!filter) {
    //   return text;
    // }
    // const regex = new RegExp(`(${filter})`, "gi");
    // const parts = text.split(regex);
    // console.log("!!!", regex);
    // console.log("@@", parts);
    // return parts.map((part, index) =>
    //   regex.test(part) ? (
    //     <span key={index} className="Test__highlight">
    //       {part}
    //     </span>
    //   ) : (
    //     part
    //   )
    // );

    if (!filter) {
      console.log("FILTER IS NOT DEFINED");
      return text;
    }
    const regex = new RegExp(`(${filter})`, "di");
    const part = text.split(regex);
    return part.map((el, index) => {
      regex.match();
    });
  };

  const a = "abara";
  const matches = a.match(new RegExp("a", "g"));
  console.log("_____________>", matches);
  const [value, setValue] = useState("");
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis corrupti magnam, cum excepturi voluptatibus numquam cupiditate ad ducimus, explicabo, iusto nostrum? Molestias recusandae officia quo, dolore ut similique quis.`;
  return (
    <div className="Test">
      <div className="Test__input">
        {ID}
        <input
          type="text"
          placeholder="Filter data text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="Test__text">{matchText(text, value)}</div>
    </div>
  );
};
export default Test;
