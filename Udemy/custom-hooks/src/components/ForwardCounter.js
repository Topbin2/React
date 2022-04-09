import useCount from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCount(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
