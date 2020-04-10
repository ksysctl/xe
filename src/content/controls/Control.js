import React from 'react';

class Control extends React.Component {
    setErrorClass = () => {
        if (this.props.validations) {
            return "is-invalid";
        } else {
            return "is-valid";
        }
    };
}

export default Control;