import React from 'react';
import Control from './Control';

class Numeric extends Control {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <label htmlFor={ this.props.id }>
                    { this.props.display }
                </label>
                <input
                    type="number"
                    name={ this.props.id }
                    id={ this.props.id }
                    value={ this.props.value }
                    placeholder={ this.props.placeholder }
                    onChange={ this.props.action }
                    required
                    className={`form-control ${this.setErrorClass()}`}
                />

                <div className="invalid-feedback">
                    { this.props.validations }
                </div>
            </div>
        );
    };
}

export default Numeric;