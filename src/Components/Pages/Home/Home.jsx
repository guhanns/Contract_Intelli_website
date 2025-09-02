import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import aiImg from '../../../images/icons/ai.svg'
import patternImg from '../../../images/bg/home_pattern.svg'
import demoPlayImg from '../../../images/icons/play-circle.svg'
import intelliVideo from '../../../video/intelli.mp4'
import { Play } from 'lucide-react'
function Home() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    if (video) {
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);
    }

    return () => {
      if (video) {
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
      }
    };
  }, []);

  return (
    <section>
        <div className="container">
      <div className="home-main">
        {/* <img src={patternImg} className="home-bg-img" /> */}
        <div className="home-details">
          <span className="home-ai">
            <span className='ai'>
              <img src={aiImg} />
              AI Powered
            </span>{"  "}
            One Platform, Any Dataset.
          </span>
          <div>
            <div className="home-head">
              Generative AI-Powered Contract Intelligence
            </div>
            <p className="home-subHead">
              Extract, analyze, and manage pharmaceutical contracts faster with
              <br /> IntelliContract - built for Model N integration, modular
              for every industry.”
            </p>
            <div className="home-btns">
              <button className="demo-play" onClick={() =>
    window.open("https://intelligence-contract.srm-tech.com/", "_blank")
  }>
                <img src={demoPlayImg} />
                Demo
              </button>
              <button 
              className="start-btn" 
              >
                Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="video-box relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            src={intelliVideo}
            controls={isPlaying}
            muted
            className="intelli-video w-full h-full rounded-lg"
          />
          {!isPlaying && (
            <div className='design-bg'>
              <button
                onClick={handlePlayPause}
                className="absolute flex items-center justify-center w-20 h-20 rounded-full 
                     bg-purple-600 hover:bg-purple-700 transition shadow-lg"
              >
                <Play className="" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Home