import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Done</FilterLink>
    {' '}
    <FilterLink>Todo</FilterLink>
  </div>
)

export default Footer;