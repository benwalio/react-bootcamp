import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <div className="Pokedex-pokecard">
                    <Pokecard
                        name="squirtle"
                        id={7}
                        type="water"
                        base_exp={63}
                    />
                </div>
            </div>
        );
    }
}

export default Pokedex;