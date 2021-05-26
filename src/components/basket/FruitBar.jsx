import React from 'react';
import PropTypes from 'prop-types';

export default function FruitBar({
  fruit
}) {
  return (
    <div
      style={{ backgroundColor: fruit.color }}
      className='fruit-bar' />
  )
}

FruitBar.propTypes = {
  fruit: PropTypes.object.isRequired
}
