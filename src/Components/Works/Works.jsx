// import React from "react";
import "./Works.css";
import image from "../../Data/image";
import data from "../../Data/data";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import "video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle } from "video-react";
import WorkProcessVid from "../../assets/videos/video.mp4";

export default function Works() {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  return (
    <>
      <section className="works" id="works">
        {data.works.map((work, index) => {
          return (
            <div
              className="work__item"
              key={index}
              onClick={() => {
                setModal(true);
                setModalImage(work.img);
              }}
            >
              <img src={image.icon_eye} alt="" className="eye-icon" />
              <img className="work__img" src={work.img} alt="" />
            </div>
          );
        })}
        <div
          className={modal ? "modal__layer show-layer" : "modal__layer"}
          onClick={() => setModal(false)}
        ></div>
        <div className={modal ? "modal__box show-modal__box" : "modal__box"}>
          <AiFillCloseCircle
            className="close-icon"
            size={30}
            onClick={() => setModal(false)}
          />
          <img src={modalImage} alt="" className="product-img" />
        </div>
      </section>
      <section className="work-process" id="process">
        <h2 className="work-process__title">Our Work Process</h2>
        <p className="work-process__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          autem perferendis? Tenetur iusto deserunt itaque nisi fugiat id
          possimus odio.
        </p>
        <div className="work-process__video">
          <Player autoPlay loop src={WorkProcessVid}>
            <ControlBar autoHide={false} disableDefaultControls={true}>
              <PlayToggle />
            </ControlBar>
          </Player>
        </div>
      </section>
    </>
  );
}
