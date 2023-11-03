import { useEffect } from 'react';
import Card from '../Card/Card';
import './Cards.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCards } from '../../store/reducers/ActionCreator';

const Cards = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(s => s.cardReducer);

  useEffect(() => {
    dispatch(fetchCards())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  return (
    <ul className='card-list'>
      {data.isLoading && 'Загрузка карточек...'}
      {
        data.cards.map(el => {
          return <Card key={el.id} title={el.title} src={el.src} />
        })
      }
      {data.error && `Произошла ошибка: ${data.error}`}
    </ul>
  )
}

export default Cards;
