export const GET_UPCOMING_DATA_SERVER = "GET_UPCOMING_DATA_SERVER";

export const getUpcomingDataServer = () => ({
  type: GET_UPCOMING_DATA_SERVER,
  payload: {
    request: {
      method: "GET",
      url: "upcoming",
    },
  },
});
