import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: ['day', 'week', 'month', 'year'],
            datesIndex: 0,
            selectedDate: 'day',
            capital: 0,
            growth: 0
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    // Selector controllers 
    decreaseTime() {
        let datesIndex = this.state.datesIndex;

        // Stop decreament when first index is reached        
        if (datesIndex !== 0) {
            datesIndex--;
        }

        const selectedDate = this.state.dates[datesIndex];

        // Set selected date and index
        this.setState({
            selectedDate,
            datesIndex
        });
    }
    
    increaseTime() {
        let datesIndex = this.state.datesIndex;
        
        // Stop increament when last index is reached
        if (datesIndex !== this.state.dates.length - 1) {
            datesIndex++;
        }

        const selectedDate = this.state.dates[datesIndex];

        // Set selected date and index
        this.setState({
            selectedDate,
            datesIndex
        });
    }
    // Selecter controllers ends here


    // On input change
    onChange() {
        const capital = Number(this.refs.capital.value);
        const growth = Number(this.refs.growth.value);
    
        (isNaN(capital) || isNaN(growth)) ? alert('Your inputs must be numbers!')
        : this.setState({
            capital,
            growth
        });
    }


    // Submit
    onSubmit(event) {
        event.preventDefault();

        const capital = this.state.capital;
        const growth = this.state.growth;

        if(capital <= 0 || growth <= 1) {
            alert('You need something to grow at a rate greater than 1...');
            return;
        }

        const data = {
            capital,
            growth,
            selectedDate: this.state.selectedDate
        }

        this.props.history.push({
            pathname: '/report',
            state: data
        });

    }
    
    
    
    render() {

        return(
            <div className="row fade-in">
                <div className="form-container col-lg-12 d-flex justify-content-center align-items-center">
                    <form className="form-wrapper form-group d-flex flex-column align-self-center" onSubmit={ this.onSubmit }>
                        
                        <label>I'm starting with:</label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-dollar"></i>
                            </span>
                            <input type="text" ref="capital" className="form-control" placeholder="Your start capital" onChange={ this.onChange } />
                        </div>
                        
                        <label>It will be growing at</label>
                        <div className="input-group">
                            <input type="text" ref="growth" className="form-control" placeholder="Multiply your capital by..." onChange={ this.onChange } />
                            <span className="input-group-addon">times</span>
                        </div>

                        <label>per</label>
                        <div className="date-selector">
                            <label>{ this.state.selectedDate }</label>
                            <div className="selector-controllers">
                                <button type="button" onClick={ () => this.decreaseTime() }>
                                    <i className="fa fa-caret-left"></i>
                                </button>
                                
                                <button type="button" onClick={ () => this.increaseTime() }>
                                    <i className="fa fa-caret-right"></i>
                                </button>
                            </div>
                        </div>

                        <button className="submit-btn form-control" onSubmit={ this.onSubmit }>
                            Show me when!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Input);