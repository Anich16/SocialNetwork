let initialState = {
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
};

let NavBarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default NavBarReducer;
