import { useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const src = 'https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="content">
        <div className='detail'>
          <h1 className='detail__heading'>Название</h1>
          <div className='detail__content'>
            <img className='detail__img' src={src} alt="" />
            <p className='detail__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aliquid accusamus voluptatem ipsam sunt mollitia dolore odio, sit cum quam veritatis atque, praesentium perferendis voluptate similique corrupti. Asperiores eaque dolor nisi iste laboriosam, quibusdam facere quo? Explicabo adipisci corrupti facilis reprehenderit? Ad suscipit itaque quasi repudiandae quia corrupti consectetur eaque molestiae corporis accusantium labore pariatur fuga, et sint minus. Quisquam saepe eligendi vel blanditiis debitis. Veniam quasi sint vitae soluta.</p>
          </div>
          <button className='detail__link' onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </div>
  )
}

export default Detail