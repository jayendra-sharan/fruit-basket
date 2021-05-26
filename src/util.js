import AUTH_DATA from './auth.data';

// function to find the exact match of username and password
// from the auth_data.
const findUsers = (username, password) => {
  return Object.keys(AUTH_DATA).filter(user => {
    const userData = AUTH_DATA[user];
    if (userData.name === username && userData.password === password) {
      return true;
    }
    return false;
  })
}

export function performLogin({ username, password }) {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const found = findUsers(username, password);
      if (found.length) {
        resolve(AUTH_DATA[found[0]]);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, delay);
  });
}
