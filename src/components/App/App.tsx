import { Route, Routes } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import './App.css';
import Detail from '../Detail/Detail';
import Info from '../SearchForm/Info';

const App = () => {
  return (
    <div className='app'>
      <div className='content'>
        <Routes>
          <Route path='/' element={(
            <>
              <Header></Header>
              <Info></Info>
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
