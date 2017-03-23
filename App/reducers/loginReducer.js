export function loginReducer(state = {loading: false, loggedIn: false, error: null}, action) {
    switch (action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            loading: true
        });

    case 'LOGIN':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            error: null,
        });

    case 'LOGOUT':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false,
            error: null
        });

    case 'ERROR': {
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false,
            error: action.err
        });
    }

    default:
        return state;
    }
}

export function profileReducer(state =
  { userObject: null},
  action) {
    switch (action.type) {
    case 'ADD_USER':
    console.log("this is in loginReducer and this is action userObject: ", action.userObject)
        return Object.assign({}, state, {
            userObject: action.userObject,
        });

    default:
        return state;
    }
}


// export function profileReducer(state = { id: null, name: null, email: null, profileImg: null, profileWidth: null, profileHeight: null}, action) {
//     switch (action.type) {
//     case 'ADD_USER':
//         return Object.assign({}, state, {
//             id: action.id,
//             name: action.email,
//             email: action.name,
//             profileImg: action.profileImg,
//             profileWidth: action.profileWidth,
//             profileHeight: action.profileHeight
//         });
//
//     default:
//         return state;
//     }
// }

/*
default
{login: {loading: false, loggedIn: false, error: null},
profile: { id: null, name: null, profileImg: null, profileWidth: null, profileHeight: null, email: null}
}
*/
