import React from "react";
import comingSoonVideo from "../assets/comming-soon.mp4";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <source src={comingSoonVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
