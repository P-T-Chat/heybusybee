// import React, { useState, useRef } from "react";
// import audioSong from './edited.mov'
// import './letter.css'

// const Letter = () => {
//     const [open, setOpen] = useState(false)
//     const [full, setFull] = useState(false)
//     const audioRef = useRef(null);
//     const handleOpenLetter = () => {
//         setOpen(true);
//         setFull(true)
//         setTimeout(() => {
//             if (audioRef.current) {
//                 audioRef.current.play()
//                     .then(() => console.log("Playback succeeded"))
//                     .catch(e => console.error("Playback failed:", e));
//             }
//         }, 1000);
//     };
//     const handleCloseLetter = () => {
//         setOpen(false);
//         setFull(false);
//         setTimeout(() => {
//             if (audioRef.current) {
//                 audioRef.current.pause();
//             }
//             setOpen(false);
//         }, 800);

//     };
//     return (
//         <div className={`envelope ${open ? 'open' : ''}`} onClick={!full ? handleOpenLetter : handleCloseLetter}>
//       <div className="flap"></div>
//       <div className="body"></div>
//       <div className={`letter ${full ? 'fullSize' : ''}`}>
//         Bangarammmmmmmmmmm<br />
//        <br />chaalaaaa kastapaduthunavvvvvvvvv <br />
//         always yours,<br /> 
//         Tejasa
//       </div>
//       <audio ref={audioRef} src={audioSong} onError={(e) => console.error('Audio error:', e.message)} />
//         </div>
//     );

// }


// export default Letter;
import React, { useState, useEffect, useRef } from "react";
import audioSong from './edited.mov'; // Use .mp3 if autoplay fails
import sorry from './sorry.mov';
import './romantic.css';
import rosesGif from './giphy.webp'; // Add a beautiful red rose GIF in your src folder
import RosePetals from './download.jpeg';

const Letter = () => {
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => {
          console.warn("Autoplay blocked. Will play on click.");
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowMessage(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="romantic-container">
       {Array.from({ length: 15 }).map((_, i) => (
      <img
        key={i}
        src={RosePetals} // OR import petal from './assets/petal.png' and use src={petal}
        className="petal"
        style={{
          left: `${Math.random() * 100}vw`,
          animationDuration: `${5 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
        alt="petal"
      />
    ))}

      <img src={rosesGif} alt="Red Roses" className="roses-gif" />
      {!showMessage ? (
        <button className="reveal-button" onClick={handleClick}>
          Click Here
        </button>
      ) : (
        <div className="message">
          Hey Handsome, Bangarammmmmmmmmmm ❤️ I'm very sorry.. sorry sorry sorryyyyyy<br />
          <br />chaalaaaa kastapaduthunavvvvvvvvv 🥺 work lo career lo, I'm super proud of youuuuuuu 👏 <br />
           Luckyyy to have youuuuuuu, naa mood swings ni baristhunanndukuu thanksssssss a lotttttt❤️ I love youuuuuuuuu forever ♾️<br />
         - 💌
        </div>
      )}
      {/* <audio ref={audioRef} src={audioSong} /> */}
      <audio ref={audioRef} src={sorry} />
    </div>
  );
};

export default Letter;
