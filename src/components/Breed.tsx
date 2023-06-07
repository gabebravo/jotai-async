import { useRoute } from 'wouter';

const Breed = () => {
  const [match, params] = useRoute('/breeds/:breed');
  return <div>You picked, {params?.breed ?? 'wtf breed is that?'}!</div>;
};

export default Breed;
