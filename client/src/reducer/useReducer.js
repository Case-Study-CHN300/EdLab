export const initialState = JSON.parse(localStorage.getItem("STATE")) || null;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }

  return state;
};
