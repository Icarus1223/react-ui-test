import './App.css';
import Header from './components/Header';
import InputCard from './components/InputCard';
import CheckBoxCard from './components/CheckBoxCard';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="card" >
          <InputCard
            index={0}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="card">
          <InputCard
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className='card'>
          <CheckBoxCard
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
