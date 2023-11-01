import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
    .then(data => data.json())
    .then(res => setCards(res.flowers))
  }, [])

  return (
    <ul className='card-list'>
      {
        cards.map(el => {
          return <Card key={el.id} title={el.title} src={el.src} />
        })
      }
    </ul>
  )
}

export default Cards