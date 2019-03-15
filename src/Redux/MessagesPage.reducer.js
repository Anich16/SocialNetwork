const ADD_MESSAGE_ELEMENT= "SN/MESSAGE_PAGE/ADD_MESSAGE_ELEMENT";
const ADD_TEXT_MESSAGE = "SN/MESSAGE_PAGE/ADD_TEXT_MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Anna",
            url: "1"
        },
        {
            id: 2,
            name: "Elsa",
            url: "2"
        },
        {
            id: 3,
            name: "Sven",
            url: "3"
        },
        {
            id: 4,
            name: "Kristoff",
            url: "4"
        },
        {
            id: 5,
            name: "Hans",
            url: "5"
        },
        {
            id: 6,
            name: "Bulda",
            url: "6"
        }
    ],
    messages: [
        {
            id: 1,
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Hello, I\'m Olaf! =)'
        },
        {
            id: 2,
            url: 'http://dobraya-feya.ru/media/heroes/animator-holodnoe-serdce-anna.jpg',
            text: 'Hi, Olaf. My name is Anna.Olaf, did Elsa make you ??? Can you help me find her ???'
        },
        {
            id: 3,
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Yes, why?'
        },
        {
            id: 4,
            url: 'http://dobraya-feya.ru/media/heroes/animator-holodnoe-serdce-anna.jpg',
            text: 'Elsa should bring summer back to town.'
        },
        {
            id: 5,
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Summer? Awww ... I do not know why, but I am always thrilled when I think about summer and the sun, and everything hooooot.'
        },
    ],
    newTextMessage: "",
    counterDialogs: 6,
    counterMessages: 5
};

let MessagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ELEMENT:
            let newMess = {
                id: ++ state.counterMessages,
                url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                text: state.newTextMessage
            };
            let newState = {...state};
            if (newMess.text !== "") {
                newState.messages.push(newMess);
            }
            newState.newTextMessage = "";
            return newState;
        case ADD_TEXT_MESSAGE:
            state.newTextMessage = action.newText;
            return state;
        default:
            return state;
    }
};

export let addTextMessageActionCreator = (text) => {
    return {
        type: ADD_TEXT_MESSAGE,
        newText: text
    }
};
export let addMessageElementActionCreator = (textareaElement) => {
    return {
        type: ADD_MESSAGE_ELEMENT,
        newText: textareaElement
    }
};

export default MessagesPageReducer;