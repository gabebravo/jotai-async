import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Breed from './Breed';
import JotaiAsync from './JotaiAsync';
import DogBreeds from './Dogs';
import { Suspense } from 'react';

const AllRoutes = () => (
  <Switch>
    <Route path="/">
      <JotaiAsync />
    </Route>
    <Route path="/counter">
      <Counter />
    </Route>
    <Route path="/breeds">
      <Suspense fallback={<div>loading...</div>}>
        <DogBreeds />
      </Suspense>
    </Route>
    <Route path="/breeds/:breed">
      <Breed />
    </Route>
  </Switch>
);

export default AllRoutes;
