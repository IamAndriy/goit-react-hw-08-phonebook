
const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectError = state => state.auth.isError;

export { selectUser, selectToken, selectIsLoggedIn, selectIsRefreshing, selectError}