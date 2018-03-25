import React from 'react';

import './time-row.scss';

class TimeRow extends React.Component {
    render() {
        return (
            <div className="time-row">
                <div className="reading-row">
                    <div className="item-column">
                        <div className="label">Month</div>
                        <div className="digital">X</div>
                    </div>
                    <div className="item-column">
                        <div className="label">Day</div>
                        <div className="digital">X</div>
                    </div>
                    <div className="item-column">
                        <div className="label">Year</div>
                        <div className="digital">X</div>
                    </div>
                    <div className="item-column">
                        <div className="dots">
                            <div className="label">AM</div>
                            <div>o</div>
                            <div className="label">PM</div>
                            <div>o</div>
                        </div>
                    </div>
                    <div className="item-column">
                        <div className="label">Hour</div>
                        <div className="digital">X</div>
                    </div>
                    <div className="item-column">
                        <div className="label">Min</div>
                        <div className="digital">X</div>
                    </div>
                </div>
                <div className="description-row">
                    <div className="item">{this.props.label}</div>
                </div>
                <div>
                    <div>{this.props.time.toString()}</div>
                </div>
            </div>
        );
    }
};

export default TimeRow;