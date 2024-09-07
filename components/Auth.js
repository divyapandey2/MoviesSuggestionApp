
export const authenticateUser = (username, password) => {

    const validCredentials = {
      username: 'testUser',
      password: 'password123',
    };
  
    return username === validCredentials.username && password === validCredentials.password;
  };
  