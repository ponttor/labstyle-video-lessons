
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lesson0 from './Lesson0';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';
import Lesson5 from './Lesson5';
import Lesson6 from './Lesson6';
import Lesson7 from './Lesson7';
import Lesson8 from './Lesson8';
import Lesson9 from './Lesson9';
import Lesson10 from './Lesson10';
import Lesson11 from './Lesson11';
import Lesson12 from './Lesson12';
import Lesson13 from './Lesson13';
import Lesson14 from './Lesson14';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Lesson0} />
            <Route exact path="/lesson-1" component={Lesson1} />
            <Route exact path="/lesson-2" component={Lesson2} />
            <Route exact path="/lesson-3" component={Lesson3} />
            <Route exact path="/lesson-4" component={Lesson4} />
            <Route exact path="/lesson-5" component={Lesson5} />
            <Route exact path="/lesson-6" component={Lesson6} />
            <Route exact path="/lesson-7" component={Lesson7} />
            <Route exact path="/lesson-8" component={Lesson8} />
            <Route exact path="/lesson-9" component={Lesson9} />
            <Route exact path="/lesson-10" component={Lesson10} />
            <Route exact path="/lesson-11" component={Lesson11} />
            <Route exact path="/lesson-12" component={Lesson12} />
            <Route exact path="/lesson-13" component={Lesson13} />
            <Route exact path="/lesson-14" component={Lesson14} />
          </Switch>
        </Router>
      </>
    )
  }
}