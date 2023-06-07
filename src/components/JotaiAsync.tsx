import { Link } from 'wouter';

const JotaiAsync = () => {
  return (
    <div>
      <div>
        <h1>Jotai Async</h1>
      </div>
      <h3>Pages:</h3>
      <div>
        <h5>Dogs</h5>
        <Link href={`/breeds`}>
          <a className="link">See all breeds</a>
        </Link>
      </div>
      <div>
        <h5>Counter</h5>
        <Link href={`/counter`}>
          <a className="link">See Counter</a>
        </Link>
      </div>
    </div>
  );
};

export default JotaiAsync;
