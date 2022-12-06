import Iframe from "react-iframe";

export const Contact = () => {
  return (
    <div className="parentDiv container-fluid-mt-5">
      <div className="row">
        <div className="col-sm-8">
        <Iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A631b32231a330627c6e289e1c55504f3fb5106abe983eac0e90661c3e8871f26&amp;source=constructor" width="693" height="462" frameborder="0"></Iframe>
        </div>
        <div className="col-sm-4">
          <div className="mt-5">
            <h2>Адрес:</h2>
            <p>Москва, Ярославское шоссе, д. 26 кор. 4</p>
            <h5>Телефон:</h5>
            <p>+ 7 (095) 222-33-22</p>
            <h5>E-mail:</h5>
            <p style={{color: "blue"}}>info@zvezdochka.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}