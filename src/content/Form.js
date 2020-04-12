import React from 'react';
import Dropdown from './controls/Dropdown';
import Numeric from './controls/Numeric';
import Summary from './controls/Summary';
import Message from './controls/Message';

import convert from './payload/convert.json';
import symbols from './payload/symbols.json';

const API_URL = 'https://data.fixer.io/api/';
const API_KEY = 'f1b1366b496bedfeeecb78075a2d1c3d';
const API_ENDPOINT_SYMBOLS = 'symbols';
const API_ENDPOINT_CONVERT = 'convert';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            amount: 1,
            from: 'CRC',
            to: 'USD',
            result: '',
            timestamp: '',
            rate: '',
            currencies: [],
            error: '',
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
        fetch(`${API_URL}${API_ENDPOINT_SYMBOLS}?access_key=${API_KEY}`)
            .then(res => res.json())
            .then(
                (res) => {
                    if (res && !res.success && res.error.code === 105) {
                        res = symbols;

                        this.setState({
                            error: 'Using mock response due to API limitations'
                        });
                    }

                    if (res && res.success) {
                        this.setState({
                            currencies: Object.keys(res.symbols).map((key) => {
                                return {
                                    value: key,
                                    name: res.symbols[key]
                                };
                            })
                        });

                        this.setState({
                            options: this.state.currencies.map((option) =>
                                <option key={option.value} value={option.value}>{option.name}</option>
                            )
                        });
                    } else if (!res) {
                        this.setState({
                            error: 'Failed to load response data'
                        });

                        this.setAPIError();
                    } else {
                        this.setState({
                            error: res.error.info
                        });

                        this.setAPIError();
                    }
                },
                (error) => {
                    this.setState({
                        error: error.toString()
                    });

                    this.setAPIError();
                }
            )
    }

    setAPIError = () => {
        let message = 'Currencies no available';

        this.setState(prevState => {
            const validations = {
                ...prevState.validations
            };

            validations.from = message;
            validations.to = message;

            return {
                validations
            }
        })
    };

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
        fetch(`${API_URL}${API_ENDPOINT_CONVERT}?access_key=${API_KEY}&from=${this.state.from}&to=${this.state.to}&amount=${this.state.amount}`)
            .then(res => res.json())
            .then(
                (res) => {
                    if (res && !res.success && res.error.code === 105) {
                        res = convert;

                        this.setState({
                            error: 'Using mock response due to API limitations'
                        });
                    }

                    if (res && res.success) {
                        this.setState({amount: new Intl.NumberFormat('en-US').format(res.query.amount)});
                        this.setState({from: res.query.from});
                        this.setState({to: res.query.to});

                        this.setState({result: new Intl.NumberFormat('en-US').format(res.result)});
                        this.setState({rate: new Intl.NumberFormat('en-US').format(res.info.rate)});

                        this.setState({
                            timestamp:
                                new Intl.DateTimeFormat(
                                    'en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                    }
                                ).format(res.info.timestamp)
                        });

                        this.setState({
                            clicked: true
                        });
                    } else if (!res) {
                        this.setState({
                            error: 'Failed to load response data'
                        });

                        this.setAPIError();
                    } else {
                        this.setState({
                            error: res.error.info
                        });

                        this.setAPIError();
                    }
                },
                (error) => {
                    this.setState({
                        error: error.toString()
                    });

                    this.setAPIError();
                }
            );

        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <div className="form-row">
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

                    <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                    >
                        Convert
                    </button>
                </div>

                <Summary
                     timestamp={ this.state.timestamp }
                     rate={ this.state.rate }
                     result={ this.state.result }
                     to={ this.state.to }
                     from={ this.state.from }
                     amount={ this.state.amount }
                     clicked={ this.state.clicked }
                     validations={ this.state.validations.amount }
                />

                <Message
                    error={ this.state.error }
                />
            </form>
        );
    };
}

export default Form;