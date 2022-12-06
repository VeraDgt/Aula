import Iframe from 'react-iframe';

export const Calendar = () => {
  return (
    <>
    <row className="row">
      
        <Iframe url="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23EF6C00&ctz=Europe%2FMoscow&showTitle=1&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showDate=0&showTz=0&mode=WEEK&src=ZTI0YjEwZmEwODRkNWM2ZDQzZmM4NTVlNTAxMmU0Mzc4NzI2ZTM5MTIzZGZkNDgyNGJjMzk3ZTU5ZTBiOGY0YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342" 
        width="100%" height="400" id="Calendar" display="block" position="relative" />

    </row>
    </>
  );
}