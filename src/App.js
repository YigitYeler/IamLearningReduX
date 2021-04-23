import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,diziGoster} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dizi = useSelector(state => state.array);
  const dispatch = useDispatch();
  const [obj,objeEkle] = useState({});
  
  
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button><br/><br/><br/>

      <input onChange={(e)=>objeEkle({isim:e.target.value})}/>
      <button onClick={()=>{dispatch(diziGoster(obj));objeEkle({isim:""})}}>Ekle</button>
          
      {dizi.map(item => {
        return(<ul key={item.isim}>
          <li>{item.isim}</li>
          
        </ul>)
      })}
      
    </div>
  );
}

export default App;
