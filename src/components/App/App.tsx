import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='content'>
        <Header></Header>
        <SearchForm></SearchForm>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default App
