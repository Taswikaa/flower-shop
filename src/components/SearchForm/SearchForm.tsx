import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <form className='form'>
        <input className='form__input' type="text" placeholder='Введите название' />
        <button className='form__btn'></button>
      </form>
    </div>
  )
}

export default SearchForm