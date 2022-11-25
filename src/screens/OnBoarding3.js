import React from "react";
import { useNavigate } from "react-router-dom";

const bg_url =
  "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fbg2.png?alt=media&token=1751b966-0977-4ab6-983f-446dd94bc6d0";

export default function OnBoarding3() {
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
        <h1 className="onBoarding-title1">MyHealthPocket</h1>
        <p className="onBoarding-title2">
          Carry your health records in pocket Get in control of your health
          records by storing, accessing sharing whenever and however you want.
        </p>
      </div>
      <div className="onBoarding-next-btn" onClick={() => navigate("/home")}>
        Let's Start
      </div>
    </div>
  );
}
