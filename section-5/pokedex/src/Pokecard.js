import React, { Component } from 'react';

function imageClassSwitch(pokeType) {
    switch(pokeType) {
        case "water": 
            return "Pokecard raised blue fluid card";
        case "fire": 
            return "Pokecard raised red fluid card";
        case "bug":
            return "Pokecard raised green fluid card";
        case "flying":
            return "Pokecard raised teal fluid card";
        case "electric":
            return "Pokecard raised yellow fluid card";
        case "normal":
            return "Pokecard raised grey fluid card";
        case "ghost":
            return "Pokecard raised purple fluid card";
        default: 
            return "Pokecard raised fluid card";
    }
}

class Pokecard extends Component {
    render() {
        const {id, name, type, base_exp} = this.props;
        const img_src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
        return (
            <div className={imageClassSwitch(type)}>

                    <div className="content">
                        <div className="image">
                            <img src={img_src} alt = "" />
                        </div>
                        <div className="center aligned header">{name}</div>
                        <div className="meta">exp: {base_exp}</div>
                        <div className="center aligned description"><p>type: {type}</p></div>
                    </div>
            </div>
        );
    }
};

export default Pokecard;