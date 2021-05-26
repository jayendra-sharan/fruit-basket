const FRUITS = [
  {
    name: 'Apple',
    color: '#f35149',
    quantity: 10,
    id: 'APL'
  },
  {
    name: 'Orange',
    color: '#e69c4b',
    quantity: 10,
    id: 'ORNG'
  },
  {
    name: 'Grapes',
    color: '#5460da',
    quantity: 10,
    id: 'GRP'
  },
];

/**
 * @description function updates the quantity of the fruit
 * in the list based on the qunatity supplied as a parameter.
 * @param {number} qtyUpdate 1 or -1
 * @param {Object} fruit
 * @param {Array} fruits 
 * @returns Array
 */
const updateFruitsQuantity = (qtyUpdate, fruit, fruits) => {
  return fruits.map(f => {
    if (f.id === fruit.id) {
      return {
        ...f,
        quantity: f.quantity + qtyUpdate
      }
    }
    return f;
  })
};

/**
 * @description Updates the fruitstack based on the LIFO principle.
 * @param {Number} qtyUpdate 1 or -1
 * @param {Object} fruit 
 * @param {Array} fruitList 
 * @returns Array
 */
const updateFruitStack = (qtyUpdate, fruit, fruitList) => {
  if (qtyUpdate === -1) {
    return [fruit, ...fruitList]; 
  }
  return fruitList.slice(1);
}

/**
 * @description Validates the update action. Allow based on LIFO principle.
 * @param {Number} qtyUpdate 1 or -1
 * @param {Object} fruit 
 * @param {Array} fruitList 
 * @returns Boolean
 */
const validQuantityUpdate = (qtyUpdate, fruit, fruitList) => {
  const top = fruitList[0];
  if (qtyUpdate === 1 && top.id === fruit.id) {
    return true;
  }
  return false;
}

export {
  FRUITS,
  updateFruitsQuantity,
  updateFruitStack,
  validQuantityUpdate
}
