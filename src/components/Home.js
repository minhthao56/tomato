import React from "react";
import ImageTomato from "../assets/tomato.png";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img
        src={ImageTomato}
        alt=""
        style={{
          width: "80%",
        }}
      />
      <h2 style={{ fontSize: 30 }}>
        <i>Coming Soon</i>
      </h2>
    </div>
  );
}
