export const GET_BROWSE_DATA_SERVER = "GET_UPCOMING_DATA_SERVER";

export const getBrowseDataServer = () => ({
  type: GET_BROWSE_DATA_SERVER,
  payload: {
    request: {
      method: "GET",
      url: "cards",
    },
  },
});
