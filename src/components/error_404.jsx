import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "../index.css";

export default function ErrorPage() {
  const [targetTheme, setTargetTheme] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("Preferences");
    if (stored) {
      try {
        const preferences = JSON.parse(stored);
        const themeName = preferences.theme_name;
        const themes = preferences.themes;
        const theme = themes?.[themeName];
        if (theme) setTargetTheme(theme);
      } catch (e) {
        console.error("Invalid Preferences data:", e);
      }
    }
  }, []);

  return (
    <div
      className="h-[100vh] flex items-center justify-center px-5 lg:px-0"
      style={{ background: targetTheme["--color-background"] || "#f5f5f5" }}
    >
      <div className="w-[415px] text-center flex flex-col items-center justify-center mx-auto gap-6 ">
        <img src="image.png" alt="Not Found" className="h-32 mx-auto" />

        <div>
          <h3 className="text-4xl md:text-[56px] leading-[64px] text-[#1A1C16]">
            Page Not Found
          </h3>
        </div>

        <div className="flex flex-col gap-6 mt-3">
          <p className="text-base leading-6 tracking-wider font-sans">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link to="/">
            <button
              style={{
                background: targetTheme["--color-button"] || "#C6C7DC",
                color: targetTheme["--color-text"] || "#645D7E",
                borderColor: targetTheme["--color-text"] || "#645D7E",
              }}
              className="font-sans max-w-[146px] w-full h-[48px] rounded-[100px] font-medium text-sm border-2"
            >
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
