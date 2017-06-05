import {
  createStore
} from 'redux';

let initState = {
  counter: 0,
  commentList: []
}

function reducer(state = initState, action) {
  var nextState = Object.assign({}, state);
  switch (action.type) {
    case "ADD_COMMENT":
      nextState.commentList.unshift(action.payload);
      return nextState;

    case "SHOW_ALL":
      nextState.commentList = action.payload;
      return nextState;
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
