import { successAction } from "../../lib/actionType";
import { BrowseItems } from "../../models/BrowseItems";
import { GET_BROWSE_DATA_SERVER } from "../actions/browseActions";
import { RootReducer } from "./rootReducer";

export interface BrowseInitialType {
  browseData: BrowseItems[];
  isLoading: boolean;
}

const BrowseInitialState: BrowseInitialType = {
  browseData: [],
  isLoading: false,
};

export const browseReducer = (state = BrowseInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_BROWSE_DATA_SERVER): {
      const data = action.payload.data;

      return { ...state, browseData: data };
    }

    default:
      return state;
  }
};

export const getBrowseData = (state: RootReducer) => state.browse.browseData;
