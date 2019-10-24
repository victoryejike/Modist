import {GET_MYTESTIMONY} from '../actions/types';

const initialState = {
    peoplesTestimony:[
        {
            id: "1",
            text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            name: "Roger Scott",
            picture: 'url("images/person_1.jpg")'      
        },
        {
            id: "2",
            text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            name: "Roger Scott",
            picture: 'url("images/person_2.jpg")' 
        },
        {
            id: "3",
            text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            name: "Roger Scott",
            picture: 'url("images/person_3.jpg")'
        }
    ]
}

export default function (state = initialState, action){
    switch (action.type){
        case GET_MYTESTIMONY:
            return{
                ...state
            }
        default:
            return state;
    }
}