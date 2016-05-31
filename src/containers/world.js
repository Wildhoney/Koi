import React, { Component, PropTypes } from 'react';
import Bird from '../components/bird';

export default class extends Component {

    /**
     * @method render
     * @return {XML}
     */
    render() {

        return (
            <section className="world">
                <Bird />
            </section>
        );


    };
}
