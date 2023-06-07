import { useAtomValue, useSetAtom } from 'jotai';
import { countAtom } from '../state/CountState';

const Counter = () => {
  const count = useAtomValue(countAtom);
  const incrementCount = useSetAtom(countAtom);

  const handler = () => incrementCount((prevCount) => prevCount + 1);

  return (
    <div>
      <h3>Count:</h3>
      <h5>{count}</h5>
      <button onClick={handler}>Increment</button>
    </div>
  );
};

export default Counter;
