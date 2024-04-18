import React, { useState } from 'react';
import firstpage from './1stpage.jpeg';
import secondpage from './second.jpeg';
import thirdpage from './third.jpeg';
import fourth from './fourth.jpeg';
import fifth from './fifth.jpeg';
import six from './six.jpeg';
import seven from './seven.jpeg';


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

    const [currentPage, setCurrentPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setCurrentPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
    };

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
                {currentPage === 2 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 3 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 4 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 5 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 6 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 7 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 8 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {pages[currentPage].foot && <p className="name">{pages[currentPage].foot}</p>}
            </div>
        </div>
    );
};

export default BirthdayCard;
