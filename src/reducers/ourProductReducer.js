import {GET_ALLPRODUCTS} from '../actions/types';

const initialState = {
    allProducts:[
        {
            id: "1",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            picture: "images/product-1.jpg"      
        },
        {
            id: "2",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            picture: "images/product-2.jpg" 
        },
        {
            id: "3",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            picture: "images/product-3.jpg" 
        },
        {
            id: "4",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            picture: "images/product-4.jpg" 
        }
    ]
};

export default function (state = initialState, action){
    switch (action.type){
        case GET_ALLPRODUCTS:
            return{
                ...state
            }
        default:
            return state;
    }
}