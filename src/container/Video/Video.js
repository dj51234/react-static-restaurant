import { React, useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { video } from "../../constants";
import "./Video.css";

const Video = () => {
  const [playback, setPlayback] = useState(false);
  const videoRef = useRef();
  const handlePlayback = (params) => {
    setPlayback(!playback);
    playback ? videoRef.current.pause() : videoRef.current.play();
    // if (playback === true) {
    //   videoRef.current.pause()
    // } else {
    //   videoRef.current.play()
    // }
  };
  return (
    <div className="app__video">
      <video
        src={video}
        type="video/mp4"
        ref={videoRef}
        controls={false}
        loop
        muted
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          onClick={handlePlayback}
          className="app__video-overlay_circle flex__center"
        >
          {playback ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
