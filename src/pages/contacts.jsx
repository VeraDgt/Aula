import Iframe from "react-iframe";
import { BsFillTelephoneFill } from "react-icons/bs";

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
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
            <p><BsFillTelephoneFill /> + 7 (095) 222-33-22</p>
            <h5>E-mail:</h5>
            <Mailto email="info@zvezdochka.ru" subject="Hello" body="Hello">
            info@zvezdochka.ru</Mailto>
          </div>
        </div>
      </div>
    </div>
  );
}