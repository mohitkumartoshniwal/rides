import React from 'react';
import GeoMap from './GeoMap';

const App = () => {
  return (
    <div className="App">
      <GeoMap />
      <div className="description">
        <p className="mt-6 space-y-7 text-sm text-zinc-600 dark:text-zinc-400">
          <em>Rides</em>
          &nbsp;is my take on building and visualizing a distributed system.
          Read more at &nbsp;
          <a
            className="text-blue-500 hover:text-blue-600 transition-colors"
            href="https://jurajmajerik.com"
            target="_blank"
            rel="noreferrer"
          >
            jurajmajerik.com
          </a>
        </p>
        {/* <p>Read about the step-by-step design process on my blog.</p> */}
      </div>
    </div>
  );
};

export default App;
