import {GET_MYSHOP} from '../actions/types';

const initialState = {
    shopProducts:[
        {
            id: "1",
            status: "30%",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            discountPrice: "$80.00",
            picture: "images/product-1.jpg"      
        },
        {
            id: "2",
            status: "New Arrival",
            title: "Young Woman wearing Dress",
            realPrice: "",
            discountPrice: "$120.00",
            picture: "images/product-2.jpg" 
        },
        {
            id: "3",
            status: "New Arrival",
            title: "Young Woman wearing Dress",
            realPrice: "",
            discountPrice: "$120.00",
            picture: "images/product-3.jpg" 
        },
        {
            id: "4",
            status: "",
            title: "Young Woman wearing Dress",
            //realPrice: "",
            discountPrice: "$120.00",
            picture: "images/product-4.jpg" 
        },
        {
            id: "5",
            status: "30%",
            title: "Young Woman wearing Dress",
            realPrice: "$120.00",
            discountPrice: "$80.00",
            picture: "images/product-5.jpg" 
        },
        {
            id: "6",
            status: "",
            title: "Young Woman wearing Dress",
            //realPrice: "$120.00",
            discountPrice: "$120.00",
            picture: "images/product-6.jpg" 
        }
    ]
};

export default function (state = initialState, action){
    switch (action.type){
        case GET_MYSHOP:
            return{
                ...state
            }
        default:
            return state;
    }
}