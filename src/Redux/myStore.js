let store = {
    getState(){
        return this._state;
    },
    _state: {
        myPage: {
            posts: [
                {
                    url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                    text: "I love hot hugs!)"
                },
                {
                    url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                    text: "This is my new page!!!"
                },
                {
                    url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                    text: "Hello, I'm Olaf! =)"
                }
            ],
            info: [{
                photo: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                name: "Olaf",
                birthDay: "1 January",
                city: "Snagge, Canada",
                webSite: "https://allLoveOlaf.com"
            }],

            newTextPost: ""
        },
        messagesPage: {
            dialogs: [{
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
        },
        navBar: {
            friendsList: [
                {
                    index: 1,
                    url: "/Sven",
                    photo: "http://www.valmaze.ru/goods_images/7/16187/0_b.jpg",
                    name: "Sven"
                },
                {
                    index: 2,
                    url: "/Anna",
                    photo: "http://dobraya-feya.ru/media/heroes/animator-holodnoe-serdce-anna.jpg",
                    name: "Anna"
                },
                {
                    index: 3,
                    url: "/Kristoff",
                    photo: "https://www.graycell.ru/picture/big/kristoff.jpg",
                    name: "Kristoff"
                }
            ]
        }
    },
    _render (){},
    subscribe (newFunction) {
        this._render = newFunction;
    },
    dispatch(action){
        switch (action.type) {
            case "ADD_POST":
                let newPost = {
                    url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                    text: this._state.myPage.newTextPost
                };
                this._state.myPage.posts.unshift(newPost);
                this._state.myPage.newTextPost = "";
                this._render();
            break;
            case "ADD_POST_TEXT":
                this._state.myPage.newTextPost = action.newText;
                this._render();
            break;
            case "ADD_MESSAGE_ELEMENT":
                let newMess = {
                    url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
                    text: this._state.messagesPage.newTextMessage
                };
                this._state.messagesPage.messages.push(newMess);
                this._state.messagesPage.newTextMessage = "";
                this._render();
            break;
            case "ADD_TEXT_MESSAGE":
                this._state.messagesPage.newTextMessage = action.newText;
                this._render();
            break;
        }
    }
    // addPost () {
    //     let newPost = {
    //         url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
    //         text: this._state.myPage.newTextPost
    //     };
    //     this._state.myPage.posts.unshift(newPost);
    //     this._state.myPage.newTextPost = "";
    //     this._render();
    // },
    // addPostText (newText) {
    //     this._state.myPage.newTextPost = newText;
    //     this._render();
    // },
    // addMessageElement () {
    //     let newMess = {
    //         url: "http://frozen-info.ru/img_biografija/Olaf.jpg",
    //         text: this._state.messagesPage.newTextMessage
    //     };
    //     this._state.messagesPage.messages.push(newMess);
    //     this._state.messagesPage.newTextMessage = "";
    //     this._render();
    // },
    // addTextMessage(newText) {
    //     this._state.messagesPage.newTextMessage = newText;
    //     this._render();
    // }
};



export default store;