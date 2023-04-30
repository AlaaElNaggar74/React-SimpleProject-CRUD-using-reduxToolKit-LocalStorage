import './App.css';

import Posts from './Component/Posts';

function App() {
  return (
    
    <div className="App">
    
    <h1 className='text-center mb-5 text-danger headddAPP'>CRUD APP WITH REDUX</h1>
    <div className="container">
      <div className="row">
      <Posts/>
      </div>
    </div>
    
    </div>
  );
}

export default App;
