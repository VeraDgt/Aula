import gymImg from "../assets/img/Sport.jpg"

const About = () => {
  return (
    <div className="container-fluid-mt-5">
      <div className="row">
        <div className="col-sm-6"><img src={gymImg} alt="Наш спортзал" width={"100%"}/></div>
        <div className="col-sm-6">
          <h1>Школа гимнастики Звездочка</h1>
          <p>В нашей школе работают лучшие тренеры, мастера спорта и олимпийские чемпионы.</p>
          <p>Приходите заниматься к нам и мы вырастим вашего ребенка чемпионом.</p>
          <p>Первое пробное занятие бесплатно!</p>
        </div>
      </div>
    </div>
  );
};

export default About;