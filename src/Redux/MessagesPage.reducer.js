const ADD_MESSAGE_ELEMENT= "SN/MESSAGE_PAGE/ADD_MESSAGE_ELEMENT";
const ADD_TEXT_MESSAGE = "SN/MESSAGE_PAGE/ADD_TEXT_MESSAGE";

let initialState = {
    dialogs: [
        {
        name: "Anna",
        url: "1"
        },
        {
            name: "Elsa",
            url: "2"
        },
        {
            name: "Sven",
            url: "3",
        },
        {
            name: "Kristoff",
            url: "4"
        },
        {
            name: "Hans",
            url: "5"
        },
        {
            name: "Bulda",
            url: "6"
        }
    ],
    messages: [
        {
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Hello, I\'m Olaf! =)'
        },
        {
            url: 'http://dobraya-feya.ru/media/heroes/animator-holodnoe-serdce-anna.jpg',
            text: 'Hi, Olaf. My name is Anna.Olaf, did Elsa make you ??? Can you help me find her ???'
        },
        {
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Yes, why?'
        },
        {
            url: 'http://dobraya-feya.ru/media/heroes/animator-holodnoe-serdce-anna.jpg',
            text: 'Elsa should bring summer back to town.'
        },
        {
            url: 'http://frozen-info.ru/img_biografija/Olaf.jpg',
            text: 'Summer? Awww ... I do not know why, but I am always thrilled when I think about summer and the sun, and everything hooooot.'
        },
    ],
    newTextMessage: ""
};

let MessagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ELEMENT:
            let newMess = {
                url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                text: state.newTextMessage
            };
            if (newMess.text !== "") {
                state.messages.push(newMess);
            }
            state.newTextMessage = "";
            return state;
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