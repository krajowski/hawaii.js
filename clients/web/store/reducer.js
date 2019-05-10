export default (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          access_token: action.payload.accessToken,
          refresh_token: action.payload.refreshToken,
          scope: action.payload.scope,
          uid: action.payload.uid,
          email: action.payload.email,
        },
      }
    case 'logout':
      return {
        ...state,
        auth: {
          isAuthenticated: false,
          access_token: null,
          refresh_token: null,
        },
      }
    default:
      return state
  }
}
