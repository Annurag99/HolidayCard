import React from 'react';

const CalendarCard = React.lazy(() => import('calendar_card/CalendarCard'));
const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
};
const App = () => {
    const calendarCards = Array.from(Array(6).keys());
    return (
        <main>
            <h1>Pune Office Holidays Container 2021</h1>
            <div style={style}>
                {calendarCards.map((day) => (
                    <React.Suspense
                        fallback={<p>Loading content from cards</p>}
                        key={day}
                    >
                        <CalendarCard dayOfDecember={day + 1} />
                    </React.Suspense>
                ))}
            </div>
        </main>
    );
};
export default App;
