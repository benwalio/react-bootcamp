import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';

class Routes extends Component {
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => name.toLowerCase() === dog.name.toLowerCase()
            );
            return <Dog {...props} dog={currentDog} />
        }

        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/dogs"
                        render={routeProps => <DogList {...routeProps} dogs={this.props.dogs} />}
                    />
                    <Route
                        exact
                        path="/dog/:name"
                        render={getDog} 
                    />
                    <Redirect to="/dogs" />
                </Switch>
            </div>
        );
    }
}

export default Routes;