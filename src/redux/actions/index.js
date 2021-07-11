import { createActions } from 'redux-actions';

export const actions = createActions({
  KEYPRESS: ({ value, keyType }) => ({ value, keyType }),
  CLEAR: () => {},
  ENTER: () => {},
});
