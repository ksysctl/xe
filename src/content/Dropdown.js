import React from 'react';

class Dropdown extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={ this.props.id }>{ this.props.display }
                    <select
                        name={ this.props.id }
                        id={ this.props.id }
                        value={ this.props.value }
                        onChange={ this.props.action }
                    >
                        {this.props.options}
                    </select>
                    <div>{ this.props.validations }</div>
                </label>
            </div>
        );
    };
}

export default Dropdown;