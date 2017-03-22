import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import {
  AsyncStorage
} from 'react-native'
const facebookParams = 'id,name,email,picture.width(100).height(100)';

function getInfo() {
    return new Promise((resolve, reject) => {

      const profileInfoCallback = (error, profileInfo) => {
        if (error) reject(error);
        resolve(profileInfo);
      };

      const profileInfoRequest =
        new GraphRequest(
          '/me',
          {
            parameters: {
              fields: {
                string: facebookParams,
              },
            },
          },
          profileInfoCallback
        );

      new GraphRequestManager().addRequest(profileInfoRequest).start();

    });
}

function facebookLogin() {
  return new Promise((resolve, reject) => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
    .then(function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
              getInfo().then((userDetails) => {
                resolve(userDetails);
              }).catch((requestError) => {
                reject(requestError);
              });
        }
      },
      function(error) {

        alert('Login fail with error: ' + error);
        reject(error);
      }
    );
  });
}

export function login() {
    return dispatch => {
        dispatch(attempt());

        facebookLogin().then((result) => {
          var mongooseId = '';
          fetch('http://localhost:8080/facebookAuth', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                result: result
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("user information from facebook: ", responseJson._id)
                mongooseId = responseJson._id
                dispatch(loggedin());
                dispatch(addUser(mongooseId, result.name, result.email, result.picture.data.url, result.picture.data.width, result.picture.data.height));
            })
            .catch((err) => {
              console.log('error: ', err)
            });

        }).catch((err) => {
            dispatch(errors(err));
      });
    };
}

function facebookLogout() {
    return new Promise((resolve) => {
        LoginManager.logOut();
        return resolve();
    });
}


export function logout() {
    return dispatch => {
        dispatch(attempt());
        facebookLogout().then(() => {
           dispatch(loggedout());
        });
    };
}

export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function errors(err) {
    return {
        type: 'ERROR',
        err
    };
}

export function loggedin() {
    return {
        type: 'LOGIN',
    };
}

export function loggedout() {
    return {
        type: 'LOGOUT'
    };
}

export function addUser(id, email, name, profileImg, profileWidth, profileHeight) {
    return {
        type: 'ADD_USER',
        id,
        name,
        email,
        profileImg,
        profileWidth,
        profileHeight
    };
}
