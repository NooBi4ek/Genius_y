import { successAction } from "../../lib/actionType";
import { UpcomingItem } from "../../models/UpComingItems";
import { GET_UPCOMING_DATA_SERVER } from "../actions/upcomingActions";
import { RootReducer } from "./rootReducer";

export interface UpComingInitialType {
  upcomingData: UpcomingItem[];
  isLoading: boolean;
}

const upcomingInitialState: UpComingInitialType = {
  upcomingData: [],
  isLoading: false,
};

export const upcomingReducer = (state = upcomingInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_UPCOMING_DATA_SERVER): {
      const data = action.payload.data;

      return { ...state, upcomingData: data };
    }

    case GET_UPCOMING_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
};

export const getUpcomingData = (state: RootReducer) =>
  state.upcoming.upcomingData;
