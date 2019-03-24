const ADD_PHOTO = "SN/PHOTO_PAGE/ADD_PHOTO";
const ADD_TEXT ="SN/PHOTO_PAGE/ADD_TEXT";

let initialState = {
    photoBlock: [
        {
            id:1,
            imgUrl: "https://i.ytimg.com/vi/EbnIOoYAi80/maxresdefault.jpg"
        },
        {
            id:2,
            imgUrl: "http://fs.kinomania.ru/file/news/e/f6/ef6c0b3625ae03fcd1e69fea119036b6.jpeg",
        }
    ],
    counter: 2,
    newText: ""
};

let PhotoPageReducer = (state=initialState, action)=> {
    switch (action.type) {
        case ADD_PHOTO:
            let newPhoto={
                id: ++state.counter,
                imgUrl: state.newText
            };
            let newState = {...state};
            if (newPhoto.imgUrl !== "") {
                newState.photoBlock.unshift(newPhoto);
            }
            newState.newText = "";
            return newState;
        case ADD_TEXT:
            return {...state, newText: action.newText};
        default:
            return state
    }
};

export let addPhoto = () => {
    return {
        type: ADD_PHOTO
    }
};

export let addText = (newText) => {
    return {
        type: ADD_TEXT,
        newText
    }
};

export default PhotoPageReducer;