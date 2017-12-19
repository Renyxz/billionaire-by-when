import React, { Component } from 'react';
import { connect } from 'react-redux';


class Report extends Component {


    renderData() {
        const data = this.props.data;

        if(!data) {
            return <div>Nothing</div>;
        }

        console.log(data);
    }

    render() {
        return(
            <div className="report-container container-fluid">
                Report is here!
                { this.renderData() }
            </div>
        );
    }
}

function mapStateToProps({ data }) {
    return {
        data
    };
}

export default connect(mapStateToProps)(Report);