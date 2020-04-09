import React from 'react';
import Dropdown from './Dropdown';
import Numeric from './Numeric';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 1,
            from: 'CRC',
            to: 'USD',
            result: '',
            timestamp: '',
            rate: '',
            currencies: [
                { value: 'CRC', name: 'Costa Rica Colon' },
                { value: 'USD', name: 'USA Dollar' }
            ],
            validations: {
                amount: '',
                from: '',
                to: ''
            }
        };

        this.state.options = this.state.currencies.map((option) =>
            <option key={ option.value } value={ option.value }>({ option.value }) { option.name }</option>
        );

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onChangeNumeric = (event) => {
        this.onChange(event);

        const amount = event.target.value;
        const status = Object.assign({}, this.state);

        if (!amount) {
            status.validations.amount = 'Amount is required';
        } else {
            status.validations.amount = '';
        }
    };

    onSubmit = (event) => {
        this.setState({result: "1"});
        this.setState({timestamp: "2010-01-07"});
        this.setState({rate: "3.14"});

        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <Numeric action={ this.onChangeNumeric }
                    display="Amount"
                    placeholder="Enter amount"
                    id="amount"
                    value={ this.state.amount }
                    validations={ this.state.validations.amount }
                />

                <Dropdown action={ this.onChange }
                    display="From"
                    id="from"
                    value={ this.state.from }
                    options={ this.state.options }
                    validations={ this.state.validations.from }
                />
                <Dropdown action={ this.onChange }
                    display="To"
                    id="to"
                    value={ this.state.to }
                    options={ this.state.options }
                    validations={ this.state.validations.to }
                />

                <button type="submit">
                    Convert
                </button>

                <div className="summary">
                    <span id="result"> { this.state.result } </span>
                    <span id="timestamp"> { this.state.timestamp } </span>
                    <span id="rate"> { this.state.rate } </span>
                </div>
            </form>
        );
    };
}

export default Form;