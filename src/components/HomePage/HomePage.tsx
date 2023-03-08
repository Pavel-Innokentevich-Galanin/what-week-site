import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DateController from '../../package/DateController/DateController';

const HomePage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let prevYear: string;
  
    const d = new Date();
    const ye = `${d.getFullYear()}`;
    const mo = d.getMonth() + 1;
  
    if (mo >= 9 && mo <= 12) {
      prevYear = ye;
    }
    else {
      prevYear = DateController.getPrevYear(ye);
    }

    navigate(`/calendar/${prevYear}`);
  });
  return null;
};

export default HomePage;
