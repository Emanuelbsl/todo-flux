import React, {createContext, useReducer} from 'react';
import { list, listReducer } from '../../data/ListReducer'

export const listData = createContext(list)
const { Provider } = listData

export default function ListContext(props) {
  const [state, dispatch] = useReducer(listReducer, list)

  return (
    <Provider value={[state, dispatch]} >
      {props.children}
    </Provider>
  );
}
