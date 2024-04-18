import React, { useState } from 'react';
import firstpage from './1stpage.jpeg';

const BirthdayCard = () => {
    const pages = [
        {
          title: "Happy Birthday Bhanji",
          content: "To my sweet niece on her 1st birthday: You've brought so much happiness into our lives. Here's to many more years of love and laughter."
        },
        {
            title: "",
            content: "",
            image: firstpage
        },
        // Add more pages as needed
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handleClick = () => {
        setCurrentPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
    };

    return (
        <div className="birthdayCard" onClick={handleClick}>
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
                <h3 className="back">{pages[currentPage].title}</h3>
                <p>{pages[currentPage].content}</p>
                {currentPage === 1 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 2 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                {currentPage === 2 && <img src={pages[currentPage].image} alt="Niece's 1st birthday" />}
                <p className="name">Akash</p>
            </div>
        </div>
    );
};

export default BirthdayCard;
