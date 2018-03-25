import React from 'react';

class TimeRow extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.label}</div>
                <div>{this.props.time.toString()}</div>
            </div>
        );
    }
};

export default TimeRow;