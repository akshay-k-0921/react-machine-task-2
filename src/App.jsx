import React, { useEffect } from 'react'
import './App.css'

import { fetchList } from './store/data'
import { useDispatch, useSelector } from 'react-redux'
import MainRoute from './routes/MainRoute'

const App = () => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.list);

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
      <MainRoute/>
    </div>
  )
}

export default App