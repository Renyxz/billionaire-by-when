import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import wealthProjection from '../lib/projection';

class Report extends Component {

    renderData() {
        const data = this.props.history.location.state;

        if(!data) {
            return <Redirect to="/" />
        }

        // Fetch wealth projection report
        const report = wealthProjection(data);
        const time = (report.years === 0 || report.years === 1) ? `${ report.days } days` 
        : `${ report.years } years or ${ report.days } days`;

        return(
            <div className="report-wrapper">
                <p>
                    If you grow
                    <br/>
                    <span>${ data.capital }</span> at <span>{ data.growth }</span> times of its value per <span>{ data.selectedDate }</span>,
                    <br/>
                    you will be a billionaire with 
                    <br/> 
                    <span>${ report.assetValue }</span> in <span>{ time }</span>.
                </p>
            </div>
        );

    }

    render() {
        return(
            <div className="report-container container-fluid fade-in">
                { this.renderData() }
            </div>
        );
    }
}

export default Report;