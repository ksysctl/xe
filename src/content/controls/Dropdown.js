import React from 'react';
import Control from './Control';

class Dropdown extends Control {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <label htmlFor={ this.props.id }>
                    { this.props.display }
                </label>
                <select
                    name={ this.props.id }
                    id={ this.props.id }
                    value={ this.props.value }
                    onChange={ this.props.action }
                    required
                    className={`form-control ${this.setErrorClass()}`}
                >
                    {this.props.options}
                </select>

                <div className="invalid-feedback">
                    { this.props.validations }
                </div>
            </div>
        );
    };
}

export default Dropdown;