import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TasksList from '../tasks-list/tasks-list';
import HomePage from '../homepage/homepage';
import ShoppingList from '../shoppinglist/shoppinglist';
import Header from '../header/header';
import FullTask from '../full-task/full-task';

import './root.css';

const Root = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/taskslist' component={TasksList} />
        <Route path='/taskslist/:taskId' component={FullTask} />
        <Route path='/shoppinglist' component={ShoppingList} />
      </Switch>
    </div>
  );
};

export default Root;
