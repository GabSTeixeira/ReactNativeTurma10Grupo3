
export function login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
          name: 'Douglas',
          email: 'douglas@douglas.com',
        });
      }, 2000);
    });
  }