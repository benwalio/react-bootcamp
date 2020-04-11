import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex ui container">
                    <div className="column">
                        <div className="ui link four cards">
                            <Pokecard
                                name="charmander"
                                id={4}
                                type="fire"
                                base_exp={62}
                            />
                                
                            <Pokecard
                                    name="squirtle"
                                    id={7}
                                    type="water"
                                    base_exp={63}
                                />

                            <Pokecard
                                name="metapod"
                                id={11}
                                type="bug"
                                base_exp={72}
                            />

                            <Pokecard
                                name="butterfree"
                                id={12}
                                type="flying"
                                base_exp={178}
                            />

                            <Pokecard
                                name="pikachu"
                                id={25}
                                type="electric"
                                base_exp={112}
                            />

                            <Pokecard
                                name="jigglypuff"
                                id={39}
                                type="normal"
                                base_exp={95}
                            />

                            <Pokecard
                                name="gengar"
                                id={94}
                                type="ghost"
                                base_exp={225}
                            />

                            <Pokecard
                                name="eevee"
                                id={113}
                                type="normal"
                                base_exp={65}
                            />
                        </div>
                    </div>
                   
                
            </div>
        );
    }
}

export default Pokedex;