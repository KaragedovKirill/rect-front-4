import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/'>HOME</Link>
    <Link to='/taskslist'>TASKS LIST</Link>
    <Link to='/shoppinglist'>SHOPPING LIST</Link>
  </div>
);

export default Header;

