import React from 'react';
import TimeRow from '../time-row';
import './read-out.scss';

class ReadOut extends React.Component {
    render() {
        return (
            <div className="read-out">
                <TimeRow /> {/* Destination Time */}
                <TimeRow /> {/* Present Time */}
                <TimeRow /> {/* Last Time Departed */}
            </div>
        );
    }
};

export default ReadOut;