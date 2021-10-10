export const state = () => ({
    players: [
        {
            id: 1,
            points: 0,
            active: true,
            name: null,
        },
        {
            id: 2,
            points: 0,
            active: false,
            name: null
        }
    ],
    compareTwoCards: [],
    points: 0,
    card: [
        {
            id: 1,
            title: "club",
            number: "two",
            frontImage: require("~/assets/2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 2,
            title: "diamond",
            number: "two",
            frontImage: require("~/assets/2-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 3,
            title: "heart",
            number: "two",
            frontImage: require("~/assets/2-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 4,
            title: "spade",
            number: "two",
            frontImage: require("~/assets/2-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        }, {
            id: 5,
            title: "club",
            number: "three",
            frontImage: require("~/assets/3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 6,
            title: "diamond",
            number: "three",
            frontImage: require("~/assets/3-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 7,
            title: "heart",
            number: "three",
            frontImage: require("~/assets/3-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 8,
            title: "spade",
            number: "three",
            frontImage: require("~/assets/3-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 9,
            title: "club",
            number: "four",
            frontImage: require("~/assets/4.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 10,
            title: "diamond",
            number: "four",
            frontImage: require("~/assets/4-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 11,
            title: "heart",
            number: "four",
            frontImage: require("~/assets/4-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 12,
            title: "spade",
            number: "four",
            frontImage: require("~/assets/4-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 13,
            title: "club",
            number: "five",
            frontImage: require("~/assets/5.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 14,
            title: "diamond",
            number: "five",
            frontImage: require("~/assets/5-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 15,
            title: "heart",
            number: "five",
            frontImage: require("~/assets/5-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 16,
            title: "spade",
            number: "five",
            frontImage: require("~/assets/5-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 17,
            title: "club",
            number: "six",
            frontImage: require("~/assets/6.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 18,
            title: "diamond",
            number: "six",
            frontImage: require("~/assets/6-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 19,
            title: "heart",
            number: "six",
            frontImage: require("~/assets/6-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 20,
            title: "spade",
            number: "six",
            frontImage: require("~/assets/6-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 21,
            title: "club",
            number: "seven",
            frontImage: require("~/assets/7.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 22,
            title: "diamond",
            number: "seven",
            frontImage: require("~/assets/7-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 23,
            title: "heart",
            number: "seven",
            frontImage: require("~/assets/7-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 24,
            title: "spade",
            number: "seven",
            frontImage: require("~/assets/7-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 25,
            title: "club",
            number: "eight",
            frontImage: require("~/assets/8.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 26,
            title: "diamond",
            number: "eight",
            frontImage: require("~/assets/8-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 27,
            title: "heart",
            number: "eight",
            frontImage: require("~/assets/8-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 28,
            title: "spade",
            number: "eight",
            frontImage: require("~/assets/8-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 29,
            title: "club",
            number: "nine",
            frontImage: require("~/assets/9.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 30,
            title: "diamond",
            number: "nine",
            frontImage: require("~/assets/9-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),

            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 31,
            title: "heart",
            number: "nine",
            frontImage: require("~/assets/9-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 32,
            title: "spade",
            number: "nine",
            frontImage: require("~/assets/9-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 33,
            title: "club",
            number: "ten",
            frontImage: require("~/assets/10.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 34,
            title: "diamond",
            number: "ten",
            frontImage: require("~/assets/10-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 35,
            title: "heart",
            number: "ten",
            frontImage: require("~/assets/10-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 36,
            title: "spade",
            number: "ten",
            frontImage: require("~/assets/10-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 37,
            title: "club",
            number: "ace",
            frontImage: require("~/assets/A.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 38,
            title: "diamond",
            number: "ace",
            frontImage: require("~/assets/A-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 39,
            title: "heart",
            number: "ace",
            frontImage: require("~/assets/A-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 40,
            title: "spade",
            number: "ace",
            frontImage: require("~/assets/A-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 41,
            title: "club",
            number: "jack",
            frontImage: require("~/assets/J.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 42,
            title: "diamond",
            number: "jack",
            frontImage: require("~/assets/J-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 43,
            title: "heart",
            number: "jack",
            frontImage: require("~/assets/J-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 44,
            title: "spade",
            number: "jack",
            frontImage: require("~/assets/J-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 45,
            title: "club",
            number: "king",
            frontImage: require("~/assets/K.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 46,
            title: "diamond",
            number: "king",
            frontImage: require("~/assets/K-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 47,
            title: "heart",
            number: "king",
            frontImage: require("~/assets/K-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 48,
            title: "spade",
            number: "king",
            frontImage: require("~/assets/K-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 49,
            title: "club",
            number: "queen",
            frontImage: require("~/assets/Q.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 50,
            title: "diamond",
            number: "queen",
            frontImage: require("~/assets/Q-1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 51,
            title: "heart",
            number: "queen",
            frontImage: require("~/assets/Q-2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "red",
            open: false,
            matched: false
        },
        {
            id: 52,
            title: "spade",
            number: "queen",
            frontImage: require("~/assets/Q-3.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "black",
            open: false,
            matched: false
        },
        {
            id: 53,
            title: "joker",
            number: "joker",
            frontImage: require("~/assets/Joker_1.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "joker",
            open: false,
            matched: false
        },
        {
            id: 54,
            title: "joker",
            number: "joker",
            frontImage: require("~/assets/Joker_2.jpg"),
            backImage: require("~/assets/Card_Back.jpg"),
            colour: "joker",
            open: false,
            matched: false
        },
    ]
});

export const getters = {
    card(state) {
        return state.card
        // .map(a => [Math.random(), a])
        // .sort((a, b) => a[0] - b[0])
        // .map(a => a[1]);
    },
    players(state) {
        return state.players;
    },
}

export const mutations = {
    FLIPCARD(state, cards) {
        state.compareTwoCards.push(cards)
        if (state.card.open) {
            return;
        } else {
            cards.open = true;
        }
        if (state.compareTwoCards.length === 2) {
            if (state.compareTwoCards[0].colour === state.compareTwoCards[1].colour &&
                state.compareTwoCards[0].number === state.compareTwoCards[1].number) {
                const findIndexOne = state.card.findIndex(i => i.id === state.compareTwoCards[0].id);
                const findIndexTwo = state.card.findIndex(i => i.id === state.compareTwoCards[1].id);
                state.card.splice(findIndexTwo, 1);
                state.card.splice(findIndexOne, 1);
                state.players[0].points += 1
                state.compareTwoCards.length = 0;
            }
            else {
                state.compareTwoCards.length = 0;

                for (let i = 0; i < state.card.length; i++) {
                    if (state.card[i].open = true) {
                        state.card[i].open = false;

                    }
                }
            }
        } else {
            console.log("nothing")
        }
    },
    CHANGE_PLAYER_ONE_NAME(state, e) {
        state.players[0].name = e.target.value
    },
    CHANGE_PLAYER_TWO_NAME(state, i) {
        state.players[1].name = i.target.value
    },
    GETUSERNAMES(state) {
        if (state.players[0].name != null && state.players[1].name != null) {
            console.log("you're good");
            this.$router.push('/PlayPage')
        } else {
            console.log("names are empty")
            console.log(state.players[0].name)
            console.log(state.players[1].name)
        }
    }
}

export const actions = {
    flipCard({ commit }, cards) {
        commit("FLIPCARD", cards)
    },
}
