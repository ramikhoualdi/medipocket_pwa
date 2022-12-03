import React from "react";
import { useNavigate } from "react-router-dom";

export default function Doctors() {
  const navigate = useNavigate();
  const goToProfile = () => {
    // console.log("Profile dd");
    navigate("/profile");
  };
  return (
    <div className="myContainer">
      <div className="headerCard">
        <h2 className="headerCardH1">
          Best USA <br></br> Specialists
        </h2>
        <div className="headerScrollView">
          <div className="headerScrollViewChild">
            <button className="buttonHeader">
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Flungs.png?alt=media&token=51b706ef-dafc-484f-954b-ab8ceba22a67"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fthyroid.png?alt=media&token=5ea0ce92-b936-4797-8f5c-e388bf252419"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fheart.png?alt=media&token=8d5d1ab2-5ec6-480d-b09b-105a54dd0eb1"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fjoints.png?alt=media&token=0a758366-8ee0-4b67-99c0-ea8ec030c0f6"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Freproductive.png?alt=media&token=c142449d-0f72-470b-9c36-a164f0133e99"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fanatomy.png?alt=media&token=ddd77593-c445-4112-b7e6-f87ab1ad1258"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fpsychology.png?alt=media&token=002d3ca4-dcf2-4180-92e0-34485613e844"
                alt="Girl in a jacket"
              />
            </button>
            <button className="buttonHeader">
              {" "}
              <img
                className="imgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fdermis.png?alt=media&token=e7169f17-ca33-49bc-a361-9bc2019de915"
                alt="Girl in a jacket"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Doctor Card */}
      <div className="doctors">
        <div className="doctorCard">
          <div className="doctorCardTop">
            <div className="doctorCardLeft">
              <div className="doctorInfo">
                <h2 className="doctorName">Dr. Kunal Gurav</h2>
                <h5 className="doctorLocation">MO ,USA</h5>
                <h5 className="doctorSpeciality">Cardiologiy</h5>
              </div>
            </div>
            <div className="doctorImgContainer">
              <img
                className="doctorImgStyle"
                src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fplaceholder.png?alt=media&token=50c889a1-fb4c-4e92-af36-034f6a9f6cdf"
                alt="Girl in a jacket"
              />
            </div>
          </div>
          <div className="doctorCardBottom">
            <div className="doctorExperience">
              <p>15yrs+</p>
            </div>
            <div className="doctorRequest">
              <button onClick={goToProfile}>Request Consult</button>
            </div>
          </div>
        </div>
        <div className="looadMore">
          <button className="loadMoreBtn">See more doctors</button>
        </div>
      </div>
    </div>
  );
}
