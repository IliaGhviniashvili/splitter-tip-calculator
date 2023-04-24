import { useEffect, useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import logo from "./images/logo.svg";

function App() {
  const[bill, setBill]=useState("");
  const[tip, setTip]=useState("");
  const[people, setPeople]=useState("");
  const[calculatedTip, setCalculatedTip]=useState(0);
  const[total, setTotal]=useState(0);

  useEffect(() => {
    console.table([bill, tip, people])
    if(bill > 0 && tip > 0 && people > 0){
      setCalculatedTip(bill * (tip / 100));
      setTotal(bill + calculatedTip);
    }
  }, [bill, tip, people, calculatedTip])

  const handleResetBtn = (e)=>{
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="splitter"/>
      <div className="container">
        <Form 
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
           />
        <Display 
          calculatedTip={calculatedTip}
          total={total}
          handleResetBtn={handleResetBtn}
          people={people}
          />
      </div>
    </div>
  );
}

export default App;
