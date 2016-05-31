import React, { Component, PropTypes } from 'react';
import Floor from '../components/floor';
import Bird from '../components/bird';

export default class extends Component {

    /**
     * @method render
     * @return {XML}
     */
    render() {

        return (
            <section className="world">

                <section className="about">
                    <h1>Koi-Koi</h1>
                    <h2>by <a href="https://github.com/Wildhoney">Adam Timberlake</a></h2>
                </section>

                <section className="background">
                    <Floor />
                </section>

                <Bird />

            </section>
        );


    };
}
