import React from "react";
import "./style.css";
import Word1 from "./word/word1-json";

export default function SearchBox() {
  const styleInfo = {
    paddingRight: "10px"
  };
  const elementStyle = {
    border: "solid",
    borderRadius: "10px",
    position: "relative",
    left: "10vh",
    height: "3vh",
    width: "20vh",
    marginTop: "5vh",
    marginBottom: "10vh"
  };
  const items = Word1.map(data => {
    return (
      <div>
        <ul>
          <li style={{ position: "relative", left: "10vh" }}>
            <span style={styleInfo}>{data.no}</span>
            <span style={styleInfo}>{data.word}</span>
            <span style={styleInfo}>{data.translate}</span>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter item to be searched"
          style={elementStyle}
          onChange={e => this.searchSpace(e)}
        />
        {items}
      </div>

      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <div class="search-btn">
          <i class="fas fa-search" />
        </div>
        <div class="cancel-btn">
          <i class="fas fa-times" />
        </div>
        <div class="search-data" />
      </div>
    </div>
  );
}
