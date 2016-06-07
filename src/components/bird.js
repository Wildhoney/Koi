import React, { Component, PropTypes } from 'react';

export default class extends Component {

    /**
     * @method render
     * @return {XML}
     */
    render() {

        return (
            <section className="bird">

                <div className="wing-left">
                    <div className="wing-left__wing"></div>
                    <div className="wing-left__feather wing-left__feather--first"></div>
                    <div className="wing-left__feather wing-left__feather--second"></div>
                    <div className="wing-left__feather wing-left__feather--third"></div>
                </div>

                <div className="hair">
                    <div className="hair__tuft"></div>
                </div>

                <div className="body">
                    <div className="body__left-ribs"></div>
                    <div className="body__left-side"></div>
                    <div className="body__breast"></div>
                </div>

                <div className="foot-left">
                    <div className="foot-left__leg"></div>
                    <div className="foot-left__toe-left"></div>
                    <div className="foot-left__toe-right"></div>
                </div>

            </section>
        );


    };
}
