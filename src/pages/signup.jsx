import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from '../components/Cabinet/Profile';
import Workout from '../components/Cabinet/Workout';
import Grade from '../components/Cabinet/Grade';

function SignUp () {
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
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path="/workout" element={<Workout/>}/>
            <Route path="/grade" element={<Grade/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default SignUp;