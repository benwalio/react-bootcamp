import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import Palette from './Palette';

class Routes extends Component {
    render() {
        const getPalette = props => {
            let name = props.match.params.name;
            let currentPalette = this.props.colorCollections.find(
                color => name === color.name
            );
            return <Palette {...props} colorPalette={currentPalette} />
        }
        
        return (
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        render={routeProps => <ColorList {...routeProps} colorCollections={this.props.colorCollections} />}
                    />
                    <Route 
                        exact
                        path="/palette/:id"
                        render={getPalette}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;