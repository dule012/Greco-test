import { createAction, handleActions } from "redux-actions";

/*                CONSTANTS                 */

const LOADING = "LOADING";
const NOT_LOADING = "NOT_LOADING";

/*                ACTIONS                 */

const setLoading = createAction(LOADING);
const endLoading = createAction(NOT_LOADING);

/*                REDUCER                 */
const defaultState = { loading: false };

export const loading = handleActions(
  {
    [LOADING]: (state, { payload }) => ({ ...state, loading: payload }),
    [NOT_LOADING]: (state, { payload }) => ({ ...state, loading: payload })
  },
  defaultState
);

export const setLoadingAction = () => setLoading(true);

export const endLoadingAction = () => endLoading(false);
