import React, { useState } from 'react';
import firstpage from './1stpage.jpeg';
import secondpage from './second.jpeg';
import thirdpage from './third.jpeg';
import fourth from './fourth.jpeg';
import fifth from './fifth.jpeg';
import six from './six.jpeg';
import seven from './seven.jpeg';
import birthdayAudio from './birthday.mp3';
import { useEffect } from 'react';

const BirthdayCard = () => {
    const pages = [
        {
          title: "Happy Birthday Cute Bhanji",
          content: "To my sweet niece on her 1st birthday: You've brought so much happiness into our lives. Here's to many more years of love and laughter.",
          foot: "Akash"
        },
        {
            title: "Happy Birthday Cute Bhanji",
            content: "To my sweet niece on her 1st birthday: You've brought so much happiness into our lives. Here's to many more years of love and laughter.",
            foot: "Akash"
          },
        {
            title: "",
            content: "",
            image: firstpage,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: secondpage,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: thirdpage,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: fourth,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: fifth,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: six,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: six,
            foot: ""
        },
        {
            title: "",
            content: "",
            image: seven,
            foot: ""
        },
        // Add more pages as needed
    ];
    const [animateImage, setAnimateImage] = useState(false);
    const [animateImage1, setAnimateImage1] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const audioRef = React.createRef(); // Ref for the audio element
    const handleClick = () => {
        if (currentPage === pages.length - 1) {
            setCurrentPage(0);
            setIsClicked(false);
        } else {
            setIsClicked(true);
            setCurrentPage(currentPage + 1);
        }
        audioRef.current.play();
    };
    useEffect(() => {
        if (currentPage === 2||currentPage === 4||currentPage === 6) {
            setAnimateImage(true);
        }
        if (currentPage === 3||currentPage === 7) {
            setAnimateImage1(true);
        }
    }, [currentPage]);
    return (
        <div  className={`birthdayCard ${isClicked ? 'clicked' : ''}`}  onClick={handleClick}>
            <div className="cardFront">
                <h3 className="happy">HAPPY BIRTHDAY Anvi!</h3>
                <div className="balloons">
                    <div className="balloonOne" />
                    <div className="balloonTwo" />
                    <div className="balloonThree" />
                    <div className="balloonFour" />
                </div>
            </div>
            <div className="cardInside">
            {pages[currentPage].title && <h3 className="back">{pages[currentPage].title}</h3>}
            
                <p>{pages[currentPage].content}</p>
                {currentPage === 2 && (
    <img
        src={pages[currentPage].image}
        alt="Niece's 1st birthday"
        className={animateImage ? 'animatedImage' : ''}
    />
)}

                {currentPage === 3 && <img src={pages[currentPage].image}   className={animateImage1 ? 'animatedImage1' : ''} alt="Niece's 1st birthday" />}
                {currentPage === 4 && <img src={pages[currentPage].image}  className={animateImage ? 'animatedImage' : ''} alt="Niece's 1st birthday" />}
                {currentPage === 5 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 6 && <img src={pages[currentPage].image}  className={animateImage ? 'animatedImage' : ''} alt="Niece's 1st birthday" />}
                {currentPage === 7 && <img src={pages[currentPage].image} className={animateImage1 ? 'animatedImage1' : ''} alt="Niece's 1st birthday" />}
                {currentPage === 8 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 9 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {pages[currentPage].foot && <p className="name">{pages[currentPage].foot}</p>}
            </div>
            <audio ref={audioRef} src={birthdayAudio} />
        </div>
        
    );
};

export default BirthdayCard;
