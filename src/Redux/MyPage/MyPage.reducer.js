const ADD_POST = "SN/MY_PAGE/ADD_POST";
const ADD_POST_TEXT ="SN/MY_PAGE/ADD_POST_TEXT";

let initialState = {
    posts: [
        {
            id: 1,
            url: "http://mamamozhetvse.ru/wp-content/uploads/2016/12/Olaf_Frozen-D-59.jpg",
            text: "I love hot hugs!)"
        },
        {
            id: 2,
            url: "http://mamamozhetvse.ru/wp-content/uploads/2016/12/Olaf_Frozen-D-59.jpg",
            text: "This is my new page!!!"
        },
        {
            id: 3,
            url: "http://mamamozhetvse.ru/wp-content/uploads/2016/12/Olaf_Frozen-D-59.jpg",
            text: "Hello, I'm Olaf! =)"
        }
    ],
    info: [{
        photo: "http://mamamozhetvse.ru/wp-content/uploads/2016/12/Olaf_Frozen-D-59.jpg",
        name: "Olaf",
        birthDay: "1 January",
        city: "Snagge, Canada",
        webSite: "https://allLoveOlaf.com"
    }],

    newTextPost: "",
    counter: 3
};

const MyPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: ++ state.counter,
                url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                text: state.newTextPost
            };
            let newState = {...state};
            if (newPost.text !== "") {
                newState.posts.unshift(newPost);
            }
            newState.newTextPost = "";
            return newState;
        case ADD_POST_TEXT:
            state.newTextPost = action.newText;
            return state;
        default:
            return state;
    }
};

export let addPostTextActionCreator = (text) => {
    return {
        type: ADD_POST_TEXT,
        newText: text
    }
};

export let addPostActionCreator = ()=> {
    return {
        type: ADD_POST
    }
};

export default MyPageReducer;