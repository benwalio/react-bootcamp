import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
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