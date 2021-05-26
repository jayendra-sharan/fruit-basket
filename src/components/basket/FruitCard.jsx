import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

export default function FruitCard ({
  fruit,
  updateQuanity
}) {
  return (
    <Card className="fruit-wrapper" style={{ backgroundColor: fruit.color }}>
      <p className="fruit-name">{fruit.name}</p>
      <p className="fruit-quantity">{fruit.quantity}</p>
      <div className="fruits-actions">
        <Button
          disabled={fruit.quantity === 10}
          onClick={() => updateQuanity(1, fruit)}
          type="primary"
          shape="circle"
        >
          +
        </Button>
        <Button
          disabled={fruit.quantity === 0}
          onClick={() => updateQuanity(-1, fruit)}
          type="primary"
          shape="circle"
        >
          -
        </Button>
      </div>
    </Card>
  )
}

FruitCard.propTypes = {
  fruit: PropTypes.object.isRequired,
  updateQuanity: PropTypes.func.isRequired
}
