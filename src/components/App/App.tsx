import { Route, Routes } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
import Detail from '../Detail/Detail';

const App = () => {
  return (
    <div className='app'>
      <div className='content'>
        <Routes>
          <Route path='/' element={(
            <>
              <Header></Header>
              <SearchForm></SearchForm>
              <Cards></Cards>
            </>
          )} />
          <Route path='/detail' element={(
            <>
              <Detail></Detail>
            </>
          )} />
        </Routes>
      </div>
    </div>
  )
}

export default App
