import React, {useContext} from "react";
import "./Missions.scss";
import {illustration, missionsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Missions() {
  const {isDark} = useContext(StyleContext);
  if (!missionsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="missions">
      <div className="missions-main-div">
        <Fade left duration={1000}>
          <div className="missions-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/mission.PNG")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="missions-text-div">
            <h1
              className={isDark ? "dark-mode missions-heading" : "missions-heading"}
            >
              {missionsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle missions-text-subtitle"
                  : "subTitle missions-text-subtitle"
              }
            >
              {missionsSection.subTitle}
            </p>
            
            <div>
              {missionsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle missions-text"
                        : "subTitle missions-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
