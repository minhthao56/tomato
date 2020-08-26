import React from "react";
import comingSoonVideo from "../assets/comming-soon.mp4";

export default function Home() {
  return (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <source src={comingSoonVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
