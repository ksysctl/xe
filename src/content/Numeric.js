import React from 'react';

class Numeric extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={ this.props.id }>{ this.props.display }
                    <input
                        type="number"
                        name={ this.props.id }
                        id={ this.props.id }
                        value={ this.props.value }
                        placeholder={ this.props.placeholder }
                        onChange={ this.props.action }
                    />
                </label>
                <div>{ this.props.validations }</div>
            </div>
        );
    };
}

export default Numeric;