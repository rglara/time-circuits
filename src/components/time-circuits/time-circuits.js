import React from 'react';
import ReadOut from '../read-out';
import KeyPad from '../key-pad';

class TimeCircuits extends React.Component {
    render() {
        return (
            <div>
                <ReadOut />
                <KeyPad />
            </div>
        );
    }
};

export default TimeCircuits;