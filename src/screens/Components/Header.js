import React from "react";
import { IoMdArrowBack, IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setDrawerShown } from "../../redux/Local/local.actions";
import "./styles.css";

export default function Header(props) {
  const { navigate, bg, isHome } = props;
  const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: bg.length > 0 ? bg : "#ffffff" }}
      className="header-header"
    >
      {isHome ? (
        <div style={{ width: 20 }}></div>
      ) : (
        <div className="header-headerSub" onClick={() => navigate(-1)}>
          <IoMdArrowBack className="header-iconStyle" />
        </div>
      )}
      <div className="header-headerSub" onClick={() => navigate("/home")}>
        <img
          className="header-imgStyle"
          src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989"
          alt="logo"
        />
      </div>
      <div
        className="header-headerSub"
        onClick={() => dispatch(setDrawerShown())}
      >
        <IoMdMenu className="header-iconStyle" />
      </div>
    </div>
  );
}
