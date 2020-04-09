import React from 'react';
import Dropdown from './Dropdown';
import Numeric from './Numeric';

const API_URL = 'http://data.fixer.io/api/';
const API_KEY = 'f1b1366b496bedfeeecb78075a2d1c3d';
const API_ENDPOINT_SYMBOLS = 'symbols';

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
            currencies: [],
            validations: {
                amount: '',
                from: '',
                to: ''
            }
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        fetch(API_URL + API_ENDPOINT_SYMBOLS + '?access_key=' + API_KEY)
            .then(res => res.json())
            .then(
                (res) => {
                this.setState({
                    currencies:  Object.keys(res.symbols).map((key) => {
                        return {
                            value: key,
                            name: res.symbols[key]
                        };
                    })
                });

                this.setState({
                    options: this.state.currencies.map((option) =>
                        <option key={ option.value } value={ option.value }>{ option.name }</option>
                    )
                });
            });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onChangeNumeric = (event) => {
        this.onChange(event);

        let amount = event.target.value;
        const status = Object.assign({}, this.state);

        if (!amount) {
            status.validations.amount = 'Amount is required';
        } else if (amount <= 0) {
            status.validations.amount = 'Amount must be positive';
        } else {
            status.validations.amount = '';
        }
    };

    onSubmit = (event) => {
        this.setState({
            result:
            new Intl.NumberFormat(
                'en-IN').format(this.state.amount)
            }
        );
        this.setState({timestamp: '2010-01-07'});
        this.setState({
            rate:
                new Intl.NumberFormat(
                    'en-IN').format(3.34)
            }
        );

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

                <button disabled={ this.state.validations.amount }
                    type="submit"
                >
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