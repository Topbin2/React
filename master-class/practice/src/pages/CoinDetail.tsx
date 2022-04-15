import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CoinDetail = () => {
  const [name, setName] = useState('zzzzzzz');
  const location = useLocation();

  useEffect(() => {
    setName(location.pathname);
  }, [location])

  console.log(name);

  return (
    <div>
      {name}
      {location.key}
    </div>
  );
};

export default CoinDetail;