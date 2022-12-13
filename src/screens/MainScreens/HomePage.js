import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./styles.css";
import Surrogacy from "./Surrogacy";

const icons = [
  {
    name: "surrogacy 1",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy1.png?alt=media&token=40042125-f551-47c6-82b2-77c35ec33921",
  },
  {
    name: "surrogacy 2",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy2.png?alt=media&token=c1f08820-3800-471d-9478-f6a704dafcd6",
  },
  {
    name: "surrogacy 3",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy3.png?alt=media&token=ebc733e4-e5ea-4f70-94bf-ad2a51485de2",
  },
  {
    name: "surrogacy 4",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy4.PNG?alt=media&token=17cbec1f-19f9-4cc5-b939-6112c0529969",
  },
  {
    name: "surrogacy 5",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy5.PNG?alt=media&token=8c125d34-6ab1-4515-ade6-07222d0c1891",
  },
  {
    name: "surrogacy 6",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy6.PNG?alt=media&token=3ce6ffdf-52c3-411c-bcc7-89041863ff1f",
  },
  {
    name: "surrogacy 7",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy7.png?alt=media&token=d985f7bc-545e-411a-bdeb-09c4e421bd16",
  },
  {
    name: "surrogacy 8",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy8.PNG?alt=media&token=9e197333-eb39-40ad-a15a-2710a238daef",
  },
  {
    name: "surrogacy 9",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy9.PNG?alt=media&token=a953a080-36c9-47cb-817c-f1dfb5928f9b",
  },
  {
    name: "surrogacy 10",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy10.PNG?alt=media&token=d302633a-8dab-4033-b0a1-2f802b128cdc",
  },
  {
    name: "surrogacy 11",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy11.PNG?alt=media&token=7ac419de-c3c8-429f-9c05-1a4343566928",
  },
  {
    name: "surrogacy 12",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy12.PNG?alt=media&token=6104155a-d12e-49a2-8524-e1b0f5c1b40c",
  },
  {
    name: "surrogacy 13",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy13.PNG?alt=media&token=67c9981e-d228-428e-8e46-87743119fbfa",
  },
  {
    name: "surrogacy 14",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy14.PNG?alt=media&token=6a2a9bb6-0ba2-4747-9300-a45258eea58c",
  },
  {
    name: "surrogacy 15",
    img: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fsurrogacy15.PNG?alt=media&token=f80062a1-27ea-47d5-abdf-6e6b83c4bc58",
  },
];
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="age-container">
      <h1 className="homeTitle">
        <span>USA</span> Medical Services
      </h1>
      <div className="firstBlocWrapper">
        <div className="homeComponent">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Fcovid-coronavirus-outbreak-healthcare-workers-and-pandemic-concept-middleaged-doctor-in-white-coat-c%201.png?alt=media&token=ca0f7758-1dc2-4be3-b017-c09925769204"
            className="absImg"
          />
          <div className="homeComponentContent">
            <h3>USA Specialists</h3>
            <p>Virtual Consultation USA Doctors</p>
          </div>
        </div>
        <div className="homeComponent">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FBHCS_BedTowerExpansion_Miami_02-222%201.png?alt=media&token=bbb110c7-d23c-4f43-a8e7-75a9c46484dc"
            className="absImg"
          />
          <div className="homeComponentContent">
            <h3>USA Hospitals</h3>
            <p>World's Best Treatment</p>
          </div>
        </div>
        <div className="homeComponent">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Flittle-girl-climbing-in-a-laundry-baske55t%201.png?alt=media&token=c05b3f90-3193-41e2-b571-2f16a172654d"
            className="absImg"
          />
          <div className="homeComponentContent">
            <h3>Surrogacy - IVF</h3>
            <p>Gender Selection USA Passport</p>
          </div>
        </div>
        <div className="homeComponent">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Fshutterstock_560047702%201.png?alt=media&token=4e23f1a9-e586-4ad9-a67d-dfc5abe27226"
            className="absImg"
          />
          <div className="homeComponentContent">
            <h3>Dr. AI</h3>
            <p>Check Symptoms 24*7</p>
          </div>
        </div>
      </div>
      <div className="secondBlocWrapper">
        <h2>Top USA Hospitals</h2>
        <div className="secondBlocSubWrapper">
          <div className="secBlocElement marRight3Percent">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887.png?alt=media&token=15230067-798e-4955-8fa2-94a3f7aef135"
              className="secImg"
            />
          </div>
          <div className="secBlocElement marRight3Percent">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887%20(1).png?alt=media&token=e8238509-42d5-4705-84e5-d2f25946de49"
              className="secImg"
            />
          </div>
          <div className="secBlocElement">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FRectangle%202887%20(2).png?alt=media&token=5039cd04-f9b8-4b8b-83b2-70711264b796"
              className="secImg"
            />
          </div>
          <div className="secBlocElement marRight3Percent">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
          <div className="secBlocElement marRight3Percent">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
          <div className="secBlocElement">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
              className="secImg"
            />
          </div>
        </div>
        <button className="greenBtn">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FplusIcon.png?alt=media&token=c711231f-3471-42f3-9fa8-9b5b0f1a78ee"
            alt=""
            className="iconImg"
          />
          <p> View USA Hospitals </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Frightarrow.png?alt=media&token=9e5d95d9-267c-41f1-924f-de52f014109b"
            alt=""
            className="arraowImg"
          />
        </button>
      </div>
      <div className="thirdBlocWrapper">
        <h2>Specialities</h2>
        <div className="thirdBlocSubWrapper">
          <div className="thirdBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          <div className="thirdBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          <div className="thirdBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          <div className="thirdBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
          <div className="thirdBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5SnYxdaGT574Cik0XagpFtmoM0OHiKZxY8LSmsPDJuY_IiZAyWX5D1MKVzs_2rIjSgU&usqp=CAU"
                className="thirdImg"
              />
              <h4>Oncology</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="fourthBlocWrapper">
        <h2>Top USA Specialities</h2>
        <div className="fourthBlocSubWrapper">
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
          <div className="fourthBlocElement">
            <div className="content">
              <img
                alt=""
                src="https://www.datocms-assets.com/32170/1643755032-eli-gabayan.jpg"
                className="fourthImg"
              />
              <h4>Dr. A. Eli Gabayan</h4>
              <p>Surgeon </p>
              <p> Boston, USA </p>
            </div>
          </div>
        </div>
        <button className="greenBtn">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FheartAnalIcon.png?alt=media&token=5e75f4b0-f093-4e7a-a9d1-12d6b6240232"
            alt=""
            className="iconImg"
          />
          <p> More USA Doctors </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Frightarrow.png?alt=media&token=9e5d95d9-267c-41f1-924f-de52f014109b"
            alt=""
            className="arraowImg"
          />
        </button>
      </div>
      {/* section 1 */}
      <div>
        <h2>Top USA Specialities</h2>
        <div className="surrogacy-section1-container">
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadow1">
              <img
                src={icons[0].img}
                alt={icons[0].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div className="surrogacy-section1-container-desc shadow1">
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Infertility
                </p>
                <p className="surrogacy-section1-container-desc-title3">
                  Not getting pregnant despite having carefully timed,
                  unprotected sex for one year?
                </p>
                <p className="surrogacy-section1-container-desc-title2">
                  Treatment
                </p>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    IVF
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    ICSI
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    PGD
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Egg & Sperm
                  </p>
                </div>
                <p className="surrogacy-section1-container-desc-title4">
                  donation
                </p>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => navigate("/intakeForm")}
              >
                <img
                  src={icons[6].img}
                  alt={icons[6].name}
                  className="surrogacy-section1-container-vector"
                />
              </div>
            </div>
          </div>
          <div className="surrogacy-section1-container-content">
            <div className="surrogacy-section1-container-img-container shadow1">
              <img
                src={icons[1].img}
                alt={icons[1].name}
                className="surrogacy-section1-container-img"
              />
            </div>
            <div
              className="surrogacy-section1-container-desc shadow1"
              style={{ marginTop: "-18px" }}
            >
              <div className="surrogacy-section1-container-desc-content">
                <p className="surrogacy-section1-container-desc-title1">
                  Surrogacy
                </p>
                <p className="surrogacy-section1-container-desc-title3">
                  A process in which a woman carries and delivers a child for a
                  couple or individual
                </p>
                <div className="surrogacy-section1-container-desc-content-special">
                  <p className="surrogacy-section1-container-desc-title5">
                    99.3%
                  </p>
                  <p className="surrogacy-section1-container-desc-title2">
                    surrogacy
                  </p>
                </div>

                <p className="surrogacy-section1-container-desc-title2">
                  success rate
                </p>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Gender Selection
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    Genetic Screening
                  </p>
                </div>
                <div className="surrogacy-section1-container-desc-content-special2">
                  <div className="dot" />
                  <p className="surrogacy-section1-container-desc-title4">
                    USA Citizenship
                  </p>
                </div>
              </div>
              <div
                className="surrogacy-section1-container-desc-next"
                onClick={() => navigate("/intakeForm")}
              >
                <img
                  src={icons[6].img}
                  alt={icons[6].name}
                  className="surrogacy-section1-container-vector"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="greenBtn">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2FphoneIcon.png?alt=media&token=b7504a18-c636-4458-a13c-57959a105560"
            alt=""
            className="iconImg"
          />
          <p> Book Free Call Surrogacy USA </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/pwa_assets%2Fhome_page%2Frightarrow.png?alt=media&token=9e5d95d9-267c-41f1-924f-de52f014109b"
            alt=""
            className="arraowImg"
          />
        </button>
      </div>
      <div className="lastBloc">
        <h2>MediPocket World</h2>
        <div className="content shadow1">
          <p>
            When facing life-changing illness, getting access to premium
            healthcare of USA experts, medical opinion, teatment, gives you
            peace of mind and confidence, when you need it the most to save the
            life
          </p>
        </div>
      </div>
    </div>
  );
}
