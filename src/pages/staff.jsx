import staffGirl from "../assets/img/girl1.jpg"
import staffGirl1 from "../assets/img/girl2.png"
import staffGirl3 from "../assets/img/girl1.webp"

export const Staff = () => {
  return (
    <div className="container-fluid-mt-5">
      <div className="card-deck">
        <div className="card">
      <img src={staffGirl} className="card-img-top" alt="Наталья Качинская" style={{width: "250px", margin: "auto"}}/>
      <div className="card-body">
        <h5 className="card-title">Наталья Качинская</h5>
        <p className="card-text">
          <li>Мастер спорта по спортивной гимнастике.</li>
          <li>Чемпион всевозможных игр.</li>
          <li>Олимпийский призер.</li>
          <li>Имеет высшее педагогическое образование.</li>
        </p>
      </div>
        </div>
        <div className="card">
      <img src={staffGirl1} className="card-img-top" alt="Алина Смирнова" style={{width: "250px", margin: "auto"}}/>
      <div className="card-body">
        <h5 className="card-title">Алина Смирнова</h5>
        <p className="card-text">
          <li>Мастер спорта по спортивной гимнастике.</li>
          <li>Олимпийская чемпионка.</li>
          <li>Заслуженный тренер страны.</li>
          <li>Имеет высшее педагогическое образование.</li>
        </p>
      </div>
        </div>
        <div className="card">
      <img src={staffGirl3} className="card-img-top" alt="Анастасия Звездная" style={{width: "210px", margin: "auto"}}/>
      <div className="card-body">
        <h5 className="card-title">Анастасия Звездная</h5>
        <p className="card-text">
          <li>Мастер спорта по спортивной гимнастике.</li>
          <li>Чемпион всевозможных игр.</li>
          <li>Олимпийский призер.</li>
          <li>Имеет высшее педагогическое образование.</li>
        </p>
      </div>
        </div>
      </div>
    </div>
  );
}