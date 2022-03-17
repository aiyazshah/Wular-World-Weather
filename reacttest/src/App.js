import React, { Suspense } from 'react';

const Testcomp = React.lazy(() => import('./components/Testcomp.js'))
function App() {

  return (
    <div className="App">

      <Suspense fallback={<div>hello</div>}>
        <Testcomp />
      </Suspense>
    </div>

  );
}

export default App;
