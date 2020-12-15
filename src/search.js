import React from "react";
import "./style.css";

export default function SearchBox() {
  return (
    <div>
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
