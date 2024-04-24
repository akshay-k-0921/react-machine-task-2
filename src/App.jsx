import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import CategoryBar from './components/CategoryBar'

import { fetchList } from './store/data'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.list);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      <CategoryBar />
    </div>
  )
}

export default App