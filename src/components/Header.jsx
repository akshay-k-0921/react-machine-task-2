import React from 'react'
import styled from 'styled-components'

import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderContainer className='wrapper'>
        <LogoText>Artisan Resto Cafe</LogoText>
        <RightNav>
            <OrderLink>My Orders</OrderLink>
            <Cart>
                <FiShoppingCart style={{width: '24px', height: '24px'}}/>
                <CartCount>0</CartCount>
            </Cart>
        </RightNav>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
`
const LogoText = styled.h1`
    font-size: 17px;
    @media (max-width: 480px){
        font-size: 15px;
    }
`
const RightNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 480px){
        gap: 10px;
    }
`
const OrderLink = styled.a`
    font-size: 14px;
`
const Cart = styled.div`
    position: relative;
`
const CartCount = styled.div`
    position: absolute;
    top: -4px;
    right: -4px;
    background: #be0000;
    height: 14px;
    width: 14px;
    text-align: center;
    border-radius: 50%;
    font-size: 10px;
`
