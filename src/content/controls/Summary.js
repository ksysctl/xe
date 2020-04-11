import React from 'react';

class Summary extends React.Component {
    setErrorClass = () => {
        if (this.props.validations || !this.props.clicked) {
            return "d-none";
        } else {
            return "";
        }
    };

    render() {
        return (
            <div className={`center-block ${this.setErrorClass()}`}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item font-weight-bold">
                        <span className="result-md">{ this.props.amount } { this.props.from } = </span>
                        <span className="result-lg">{ this.props.result } </span>
                        <span className="result-md">{ this.props.to }</span>
                    </li>
                    <li className="list-group-item font-weight-bold">
                            <span className="result-sm">
                                1 { this.props.from } = { this.props.rate } { this.props.to }
                            </span>
                    </li>
                    <li className="list-group-item">
                        <small className="text-muted">Last updated: { this.props.timestamp }</small>
                    </li>
                </ul>
            </div>
        );
    };
}

export default Summary;