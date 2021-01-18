import './App.css';
import React from 'react'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
      name="Eric Jude"
      avatar="https://randomuser.me/api/portraits/men/1.jpg"
      online="online"
  
      />
      <Contact 
      name="Anita Sutton"
      avatar="https://randomuser.me/api/portraits/women/86.jpg"
      online=""
  
      />
      <Contact 
      name="Michael Wash"
      avatar="https://randomuser.me/api/portraits/men/18.jpg"
      online="online"
  
      />
    </div>
  );
}

export default App;
