
import React, { useState, useEffect } from "react";
import Crown from "../assets/images/Square_crown.png";
import "./Photo.css";

export default function PhotoGrid() {
  const images = require.context("../assets/images_3", false, /\.png$/);
  const allImagePaths = images.keys().map(images);

  const [imagePaths, setImagePaths] = useState(allImagePaths);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth < 640);
      setImagePaths(
        window.innerWidth < 640 ? allImagePaths.slice(0, 20) : allImagePaths
      );
    };

    updateView(); // Initial check
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, [allImagePaths]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Fade Effect */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          background: "linear-gradient(to right, white, transparent)",
          zIndex: 50,
        }}
        className="fades"
      ></div>

      {/* Image Grid Container */}
      <div
        className={`sm:m-2 sm:gap-6 flex flex-wrap justify-center md:m-8 md:gap-8 relative z-10 ${
          isMobile ? "mb-6" : ""
        }`}
        style={isMobile ? { marginBottom: "24px" } : {}}
      >
        <img src={Crown} alt="Crown" className="Crown-alignment z-20" />

        {/* Other Images */}
        {imagePaths.map((item, i) => (
          <img key={i} src={item} alt={`image-${i}`} className="w-16 h-16" />
        ))}
      </div>

      {/* Right Fade Effect */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          background: "linear-gradient(to left, white, transparent)",
          zIndex: 50,
        }}
        className="fades"
      ></div>
    </div>
  );
}
