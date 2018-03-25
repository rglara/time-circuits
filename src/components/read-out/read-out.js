import React from 'react';
import TimeRow from '../time-row';

class ReadOut extends React.Component {
    render() {
        return (
            <div>
                <TimeRow /> {/* Destination Time */}
                <TimeRow /> {/* Present Time */}
                <TimeRow /> {/* Last Time Departed */}
            </div>
        );
    }
};

export default ReadOut;