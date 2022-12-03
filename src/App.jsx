import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return <h2>Страница профиля</h2>;
};

const Workout = () => {
  return <h2>Занятия и оплата</h2>;
};

const Grade = () => {
  return <h2>Мои достижения</h2>;
};

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <div className="nav flex-column nav-pills" aria-orientation="vertical">
            <NavLink className="nav-link" to={"profile"}>Профиль</NavLink>
            <NavLink className="nav-link" to={"workout"}>Занятия и оплата</NavLink>
            <NavLink className="nav-link" to={"grade"}>Мои достижения</NavLink>
          </div>
        </div>

        <div className="col-sm-9">
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/workout" element={<Workout/>}/>
            <Route path="/grade" element={<Grade/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
