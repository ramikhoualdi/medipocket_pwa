import React from "react";
import { useNavigate } from "react-router-dom";

const bg_url =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fbg.png?alt=media&token=a36ec316-b594-4a1a-9de5-104ed8ef3287";

export default function OnBoarding1() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${bg_url})`,
      }}
      className="onBoarding-container"
    >
      <img
        className="onBoarding-logo"
        src={process.env.PUBLIC_URL + "/images/logo_white.png"}
        alt="logo"
      />
      <div className="onBoarding-title-container">
        <h1 className="onBoarding-title1">Telehealth</h1>
        <p className="onBoarding-title2">
          Affordable, Cross Border Care Access best qulity doctors cross border
          24 x 7
        </p>
      </div>
      <div
        className="onBoarding-next-btn"
        onClick={() => navigate("/onBoarding2")}
      >
        Next
      </div>
    </div>
  );
}
