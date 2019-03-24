const ApiConstants = {
  app: {
    login: {
      apiConfig: {
        url: '/api/uaa-service/oauth/token', // 'http://172.31.107.78:8087/spring-security-oauth-server/oauth/token',
        method: 'POST',
      },
      config: {
        headers: {
          authorization: 'Basic YmF5dmlldzpiYXl2aWV3c2VjcmV0',
          'Content-Type': 'application/json',
        },
      },
      // attachPrefix: true,
      // skipAuth: true,
    },
  },
}
export default ApiConstants;
