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

const fruitStack = [];

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

const updateFruitStack = (qtyUpdate, fruit, fruitList) => {
  if (qtyUpdate === -1) {
    return [fruit, ...fruitList]; 
  }
  return fruitList.slice(1);
}

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