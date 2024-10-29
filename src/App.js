import {useState} from 'react'

function App() {

  const [person, setPerson] = useState({
    fullname: "Mohamed DIALLO",
    bio: "developpeur junior ",
    imgscr: "./img/thing",
    profession: "Employe/Etudiant"
  });
  
  const [time, setTime] = useState(0)

  const [show, setshow] = useState(false);
  
  const interval = (start) => {
    
    const end = new Date()
    console.log(end.getMilliseconds());
    

    const intervale = end.getMilliseconds() - start.getMilliseconds()

    setTime(intervale)
    
  }

  const intervaleState = () => {
    const start = new Date()
    console.log(start.getMilliseconds());
    
    setshow(!show)
    
    interval(start)
  }
  

  return (
    <div className="App">
      <button onClick={intervaleState} className='bg-blue-300 p-2 font-semibold'>Show</button>
      { show ? (<h1 className=" font-bold">
        {person.fullname} <br/>
        {person.bio} <br/>
        {person.imgscr} <br/>
        {person.profession}
    </h1>): "" }
    <input value={time} className='h-10' />
    </div>
  );
}

export default App;
