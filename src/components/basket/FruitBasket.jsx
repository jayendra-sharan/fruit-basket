import React, { useState } from "react";
import Error from './Error';
import { Card } from "antd";
import FruitCard from './FruitCard'
import { FRUITS, updateFruitsQuantity, updateFruitStack, validQuantityUpdate } from "./fruits";
import { useHistory } from "react-router";
import TopNav from "./TopNav";
import FruitBar from "./FruitBar";

export default function FruitBasket ({
  loginData,
  setLoginStatus
}) {
  const { isLoggedIn, user } = loginData;
  const history = useHistory();

  // redirect to login if user is not logged in.
  if (!isLoggedIn) {
    history.push('/login')
  }

  const [fruits, updateFruits] = useState(FRUITS);
  const [fruitStack, updateFruitBasket] = useState([]);
  const [error, setError] = useState({
    hasError: false,
    errorMessage: ''
  });


  const allowed = (u) => {
    if (u.permission === "all") {
      return true;
    }
    return false;
  }

  const updateQuanity = (qtyUpdate, fruit) => {
    setError({
      hasError: false,
      errorMessage: ''
    });
    if (!allowed(user)) {
      setError({
        hasError: true,
        errorMessage: 'You are not authorised to update basket'
      });
      return;
    }
    switch(qtyUpdate) {
      case 1:
        if (validQuantityUpdate(qtyUpdate, fruit, fruitStack)) {
          updateFruits(updateFruitsQuantity(qtyUpdate, fruit, fruits));
          updateFruitBasket(updateFruitStack(qtyUpdate, fruit, fruitStack));    
        } else {
          setError({
            hasError: true,
            errorMessage: 'Only the fruit on top can be removed.'
          });
        }
        return;
      case -1:
        updateFruits(updateFruitsQuantity(qtyUpdate, fruit, fruits));
        updateFruitBasket(updateFruitStack(qtyUpdate, fruit, fruitStack));  
        return;
      default:
        return;
    }
  }
  return (
    <>
      <TopNav setLoginStatus={setLoginStatus} />

      <div className="fruits-home">      
        {
          fruits.map(fruit => (
            <FruitCard
              updateQuanity={updateQuanity}
              key={fruit.id}
              fruit={fruit} />
            )
          )
        }
      </div>

      <div className="fruits-updates">
        <Card title="Basket Stack">
            {
              fruitStack.map(f => <FruitBar key={`${f.id}.${f.quantity}`} fruit={f} />)
            }
        </Card>
      </div>

      <Error error={error} />
    </>
  )
}

