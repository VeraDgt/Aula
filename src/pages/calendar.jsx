import Iframe from 'react-iframe';
import HappyNY from '../assets/img/s-novym-godom.gif'

const Calendar = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-4">
        <Iframe url="https://calendar.google.com/calendar/embed?src=e24b10fa084d5c6d43fc855e5012e4378726e39123dfd4824bc397e59e0b8f4a%40group.calendar.google.com&ctz=Europe%2FMoscow" 
        width="300" height="300" id="Calendar" display="block" position="relative" />
        </div>
      <div className="col-md-8"><img src={HappyNY} alt="" width={"100%"} />
      </div>
    </div>
    </>
  );
};

export default Calendar;