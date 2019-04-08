import {createStore} from 'redux';

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default: 
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Action generator:

const incrementCount = ({ incrementBy = 1} = {}) => ({  //Deconstruye el objeto de entrada, pone 1 por defecto,
  type: 'INCREMENT',                                    
  incrementBy                                            //lo asigna a variable del mismo nombre
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count} = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 150}));
store.dispatch(resetCount());
