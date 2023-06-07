import { useAtomValue } from 'jotai';
import { fetchBreedsSelector } from '../state/fetchBreedsSelector';
import { Link } from 'wouter';

const DogBreeds = () => {
  const dogBreeds = useAtomValue(fetchBreedsSelector);

  return (
    <div>
      <h3>Dog Breeds:</h3>
      <ul>
        {dogBreeds.map((breed: string) => (
          <li>
            <Link href={`/breeds/${breed}`}>
              <a className="link">{breed}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogBreeds;
