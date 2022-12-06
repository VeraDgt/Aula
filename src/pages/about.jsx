import gymImg from "../assets/img/Sport.jpg"

const About = () => {
  return (
    <div className="parentDiv container-fluid-mt-5">
      <div className="row">
        <div className="col-sm-6"><img src={gymImg} alt="Наш спортзал" width={"100%"}/></div>
        <div className="col-sm-6">
          <h1 style={{textAlign: "center", marginTop: "10px"}}>Школа гимнастики &#171;Звездочка&#187;</h1>
          <p>В нашей школе работают лучшие тренеры, мастера спорта и олимпийские чемпионы.</p>
          <p>Приходите заниматься к нам и мы вырастим вашего ребенка чемпионом.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius, repudiandae quos fugit ea magnam placeat eum veniam maxime deleniti voluptatibus laborum deserunt! Deserunt quas ea, architecto numquam dolorem temporibus.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quam cumque iste quibusdam aspernatur aliquam corrupti, dolores aut voluptatum delectus amet laudantium rem illo pariatur repellendus tenetur eos deleniti mollitia.</p>
          <p>Первое пробное занятие бесплатно!</p>
        </div>
      </div>
    </div>
  );
};

export default About;