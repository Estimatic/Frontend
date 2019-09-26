export const CHANGE_CUR_TAB = "CHANGE_CUR_TAB";

export const changeCurTab = tab => dispatch => {
  dispatch({ type: CHANGE_CUR_TAB, payload: tab });
};
