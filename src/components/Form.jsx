import dollarIcon from "../images/icon-dollar.svg"
import personIcon from "../images/icon-person.svg"
const Form =({bill, setBill, tip, setTip, people, setPeople })=>{

    const handleSelectedTip = (e) =>{
        setTip(+e.target.value);
    }

    return(
        <div className="form">
            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="bill">Bill</label>
                    {/* <p className="error">{showBillAmtError ? "Please enter numbers only" : ""}</p> */}
                </div>
                <div className="number-wrapper">
                    <input type="number" id="bill" className="number-input" value={bill}
                        onInput={(e)=> setBill(+e.target.value)}/>
                    <img src={dollarIcon} aria-hidden="true" className="icon"/>
                </div>
            </div>

            <div className="tip-section">
               <p className="label">Select Tip %</p>
                <div className="tip-amount-wrapper" >
                    <div className="tip-amount">
                        <input type="radio" className="tip-input" onInput={handleSelectedTip} 
                               name="tip" value="5" id="input1"/>
                        <label className="tip-btn" htmlFor="input1" >5%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" className="tip-input" onInput={handleSelectedTip} 
                               name="tip" value="10" id="input2"/>
                        <label className="tip-btn" htmlFor="input2">10%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" className="tip-input" onInput={handleSelectedTip} 
                               name="tip" value="15" id="input3"/>
                        <label className="tip-btn" htmlFor="input3">15%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" className="tip-input" onInput={handleSelectedTip} 
                               name="tip" value="25" id="input4"/>
                        <label className="tip-btn" htmlFor="input4">25%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" className="tip-input" onInput={handleSelectedTip} 
                               name="tip" value="50" id="input5"/>
                        <label className="tip-btn" htmlFor="input5">50%</label>
                    </div>
                    
                        <input type="number" onInput={handleSelectedTip}
                               className="number-input tip-custom"
                               name="tip" placeholder="Custom"/>
                               {/* <label htmlFor=" Custom" 
                                      className="tip-custom-label">Custom</label> */}
                    
                </div>
            </div>



            <div className="label-group">
                <div className="label-wrapper">
                    <label htmlFor="people" className="label">Number of People</label>
                    <p className="error">{people == 0 ? "Can't be zero" : ""}</p>
                </div>
                <div className="number-wrapper">
                    <input type="number" id="people" value={people}
                           className={`number-input ${people == 0 ? 'number-error' : ""}`}
                           onInput={(e)=> setPeople(+e.target.value)}/>
                    <img src={personIcon} aria-hidden="true" className="icon"/>
                </div>
            </div>

        </div>
    )
}


export default Form