import React, {useState, useEffect} from 'react'

function Intro() {
    let currentDay = new Date();
    let currentHour = currentDay.getHours();

    const [hourDay, setHourDay] = useState(currentHour);
    const greetStyle = {
        color: '#fff',
        paddingBottom: '10px',
        width: "100%",
        height: "auto",
        maxWidth: '500px',
        minWidth: '300px',
        marginTop: '4vh'
    }
    
    useEffect(() => {
        let newHour = new Date().getHours();
        setHourDay(newHour);
    }, [hourDay]);

    function handleGreeting() {
        if(hourDay < 12) {
            return 'Good morning. What would you like to do today?'
        }
        else if(hourDay < 16) {
            return 'Good afternoon. Hope you are having a great day'
        } else {
            return 'Good evening. Hope you had a great day. Wanna add something new?'
        }
    }

    return (
        <div style={greetStyle}>
            <h5>{handleGreeting()}</h5>
        </div>
    )
}

export default Intro;