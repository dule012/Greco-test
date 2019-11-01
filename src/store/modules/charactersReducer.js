import { createAction, handleActions } from "redux-actions";
import http from "../../utility/http";
import { NAME_STARTS_WITH, OFFSET, API_KEY } from "../../constants/api";

/*                CONSTANTS                 */

const SET_CHARACTERS = "SET_CHARACTERS";

/*                ACTIONS                 */

const setCharacters = createAction(SET_CHARACTERS);

/*                REDUCER                 */

const defaultState = { characters: [] };

export const characters = handleActions(
  {
    [SET_CHARACTERS]: (state, { payload }) => ({
      ...state,
      characters: payload
    })
  },
  defaultState
);

export const getCharacters = (dispatch, name, number) =>
  http
    .get(
      `${process.env.REACT_APP_URL}?${NAME_STARTS_WITH}=${name}&${OFFSET}=${number}&${API_KEY}=${process.env.REACT_APP_PUBLIC_KEY}`
    )
    .then(response => dispatch(setCharacters(response.data.data.results)));
