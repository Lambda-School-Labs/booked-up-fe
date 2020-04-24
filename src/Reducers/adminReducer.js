import { SOMETHING_ADMIN_STUB } from "../Actions/adminAction";
import { initialState } from "./indexReducer";

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_ADMIN_STUB: {
      console.log(action.payload, "adminReducer.js, SOMETHING_ADMIN_STUB");
      return state;
    }
    default: {
      return state;
    }
  }
};
