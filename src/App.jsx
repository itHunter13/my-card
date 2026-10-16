import "./App.css";

function App() {
  return (
      <div className="page">
        <h1>Моя визитка</h1>

        <div className="card">
          <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQd0XSBbwOUsPZWN72YrBGZiv2SEYA27rMkVDQ_JulYv-DZYXEVWJURhm&s=10"
              alt="Моє фото"
          />

          <h2>Горбачев Илья</h2>
          <p>Студент</p>
          <p> Телефон: +380 XX XXX XX XX</p>
          <p> Email: example@gmail.com</p>
        </div>

        <h1>Моє улюблене місто</h1>

        <div className="city">
          <h2>Львів, Україна</h2>
          <p>Рік заснування: 1256</p>
          <p>
            Львів — красиве історичне місто з архітектурою,
            затишними вулицями та відомою площею Ринок.
          </p>

          <div className="photos">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_mFRBdIvpx5IhAt6bHv7tGFh61QPumCV3OtrYiCJvw&s=10"
                alt="парк"
            />
            <img
                src="https://lviv-weekend.com.ua/wp-content/uploads/2020/01/Lviv_ploshca_Rynok_vnochi.jpg"
                alt="вечер"
            />
            <img
                src="https://o-go-go.com/wp-content/uploads/2022/04/opennyj.jpg"
                alt="архитектура"
            />
          </div>
        </div>
      </div>
  );
}

export default App;

