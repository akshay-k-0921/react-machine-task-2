import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTOCart, decrement } from '../store/cart';

const CartButtons = ({ dish }) => {
    const dispatch = useDispatch();
    const { cartList } = useSelector(state => state.cart);

    const dish_item = cartList.find(item => item?.dish_id === dish.dish_id);
 
    return (
        <CountContainer>
            <MinusButton onClick={() => dispatch(decrement(dish))}>-</MinusButton>
            <Count>{dish_item ? dish_item.quantity : 0}</Count>
            <PlusButton onClick={() => dispatch(addTOCart(dish))}>+</PlusButton>
        </CountContainer>
    );
};

export default CartButtons;

const CountContainer = styled.div`
    display: inline-block;
    background: #51a148;
    padding: 3px 30px;
    border-radius: 15px;
`;
const MinusButton = styled.button`
    margin-right: 30px;
    font-size: 17px;
`;
const Count = styled.span`
    margin-right: 30px;
`;
const PlusButton = styled.button`
    font-size: 17px;
`;
