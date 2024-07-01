import React, { useState } from 'react';

const style = {
    width: '350px',
    height: '450px',
    backgroundImage: 'url(https://image.scoopwhoop.com/w360/s4.scoopwhoop.com/anj/sw/fcd353db-2922-419c-87d4-7bf14a6315de.jpg.webp)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    boxShadow: '10px 1px 5px -7px rgba(0,0,0,0.61)',
    textAlign: 'center',
};

const isHoliday = (dayOfDecember) => {
    if (dayOfDecember-1 === 2 || dayOfDecember-1 === 4) {
        return (<p style={{ color: "red", fontSize: "20px", fontFamily: "fantasy", marginRight:'120px' }}>
            No Holiday
        </p>)
    } else {
        return (<p style={{ color: "green", fontSize: "20px", fontFamily: "fantasy", marginRight:'120px' }}>
            Holiday
        </p>)
    }
}

const CalendarCard = ({ dayOfDecember }) => {
    const [isClicked, setIsClicked] = useState(false);
    const holidays = ['Ganesh Chaturthi', 'Vijaya Dashami',
        'Kannada Rajyothsava', 'Diwali', 'Guru Nanak Jayanti', 'Before Christmas'];
    return (
        <div onClick={() => setIsClicked(!isClicked)} style={style}>
            <span>{isClicked && isHoliday(dayOfDecember)}</span>
            {isClicked ?
                <p style={{ color: "black", fontSize: "20px", fontFamily: "fantasy" }}>{holidays[dayOfDecember - 1]}</p>
                : (
                    <p style={{ color: "black", fontSize: "20px", fontFamily: "fantasy" }} >{dayOfDecember}</p>
                )}
        </div>
    );
};
export default CalendarCard;
