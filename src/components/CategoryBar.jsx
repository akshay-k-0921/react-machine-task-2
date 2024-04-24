import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { fetchList } from '../store/data';
import {Api} from '../apiConfig/axiosConfig'

const CategoryBar = () => {
    
    const { items, loading, error } = useSelector(state => state.list);

    console.log(items);

  return (
    
    <Container className='wrapper'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {items.map((item) => (
            <CategoryLink>{item.table_menu_list.menu_category}</CategoryLink>
        ))}
        
    </Container>
  )
}

export default CategoryBar

const Container = styled.div``
const CategoryLink = styled.div``