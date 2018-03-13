import React from 'react';
import { connect } from 'react-redux';
import { toggleSticky } from './actions/stickies';

const Sticky = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleSticky(id))}
    style={ complete ? { textDecoration: 'line-through', color: 'blue' } : {} }
  >
    {name}
  </li>
)

export default connect()(Sticky);