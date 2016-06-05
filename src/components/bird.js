import React, { Component, PropTypes } from 'react';

export default class extends Component {

    /**
     * @method render
     * @return {XML}
     */
    render() {

        return (
            <section className="bird">
                <div className="left-body"></div>
                <div className="left-wing"></div>
                <div className="top-left"></div>
                <div className="lower-left"></div>
                <div className="left-antenna"></div>
                {/*<div className="beak-left"></div>*/}
                <div className="foot-left"></div>
                <div className="toe-left"></div>
                <div className="toe-right"></div>
            </section>
        );


    };
}
