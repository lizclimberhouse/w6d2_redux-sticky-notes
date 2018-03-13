import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky';

const filtered = (stickies, forFilter) => {
  switch(forFilter) {
    case 'All':
      return stickies;
    case 'Todo':
      return stickies.filter( t => !t.complete )
    case 'Done':
      return stickies.filter( t => t.complete )
  }
}

const StickyList = ({ stickies, forFilter }) => (
  <ul>
    { filtered(stickies, forFilter).map( (t) => {
        return ( <Sticky key={t.id} {...t} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies, forFilter: state.forFilter }
}

export default connect(mapStateToProps)(StickyList);