import React from 'react';

class Message extends React.Component {
    setErrorClass = () => {
        if (this.props.error) {
            return "";
        } else {
            return "d-none";
        }
    };

    render() {
        return (
            <div className={`alert alert-warning center-block ${this.setErrorClass()}`} role="alert">
                { this.props.error }
            </div>
        );
    };
}

export default Message;