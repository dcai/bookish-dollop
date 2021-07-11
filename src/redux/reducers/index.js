import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { actions } from '../actions';
const { keypress, clear, enter } = actions;

const initState = {
  status: 'locked',
  secret: process.env.REACT_APP_HOTELSAFE_PIN || '0000',
  enteredNumbers: [],
  display: null,
};

const hotelSafeReducer = handleActions(
  {
    [clear]: (state, action) => {
      return { ...state, enteredNumbers: [], display: null };
    },
    [enter]: (state, action) => {
      const { enteredNumbers, status } = state;
      if (enteredNumbers.length !== 4) {
        return { ...state, display: 'invalid' };
      }
      const secret = enteredNumbers.join('');
      if (status === 'locked') {
        if (secret === state.secret) {
          return {
            ...state,
            status: 'open',
            enteredNumbers: [],
            display: 'correct, safe is open',
          };
        } else {
          return { ...state, enteredNumbers: [], display: 'invalid' };
        }
      }
      if (status === 'open') {
        return { ...initState, secret, display: 'pin saved, safe is locked now' };
      }
    },
    [keypress]: (state, action) => {
      const { value } = action.payload;

      const nums = [...state.enteredNumbers];
      if (nums.length < 4) {
        nums.push(value);
      }

      return { ...state, enteredNumbers: nums, display: nums.join('') };
    },
  },
  initState,
);

const rootReducer = combineReducers({
  hotelsafe: hotelSafeReducer,
});

export default rootReducer;
