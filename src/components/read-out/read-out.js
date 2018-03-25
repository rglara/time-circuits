import React from 'react';
import TimeRow from '../time-row';
import './read-out.scss';

class ReadOut extends React.Component {
    render() {
        const destTime = new Date(1955, 10, 5, 6, 0);
        const presentTime = new Date();
        const lastTime = new Date(1985, 9, 26, 1, 31);

        return (
            <div className="read-out">
                <TimeRow
                    label="Destination Time"
                    time={destTime}
                />
                <TimeRow
                    label="Present Time"
                    time={presentTime}
                />
                <TimeRow
                    label="Last Time Departed"
                    time={lastTime}
                />
            </div>
        );
    }
};

export default ReadOut;