import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { SwapiServiceProvider } from '../swapi-service-context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './app.css'
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              
              <Switch>
                <Route path='/StarDB' component={() => <h2>Welcome to StarDB</h2>} exact/>
                <Route path='/StarDB/people/:id?' component={PeoplePage} />
                <Route path='/StarDB/planets/:id?' component={PlanetsPage} />
                <Route path='/StarDB/starships' component={StarshipsPage} exact/>
                <Route path='/StarDB/starships/:id' 
                      render={({match}) => {
                        const { id } = match.params 
                        return <StarshipDetails itemId={id} />
                      }}/>
                <Route render={() => <h2>Page not found</h2>}/>
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}