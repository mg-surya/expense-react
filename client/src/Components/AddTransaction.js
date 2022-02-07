import React,{ Fragment , useState} from "react";
import '../App.css';


const AddTrans = () =>{

    const[income_desc,setIncomeDesc]=useState("");
    const[date_in,setDateIn]=useState("");
    const[category,setCategory]=useState("");
    const[amt,setAmt]=useState("");
    const onSubmitForm =async e =>{
        e.preventDefault();
        try {
            const body={income_desc,date_in ,category,amt};
            const response= await fetch("http://localhost:5000/expense",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
         //console.log(response);  
         window.location="/"; 
        } catch (error) {
            console.error(error.message);
        }
    }


    return(
        <Fragment>
            <h1 className="text-center mt-5">Expense Tracker</h1>
            <form class="form-horizontal" onSubmit={onSubmitForm}>
            <div class="form-row">
                <div class="col">
                    <label class="control-label col-sm-2"><b>Desc:</b></label>
                    <div class="col-sm-10">
                        <input placeholder="Desc" type="text" className="form-control" value={income_desc} required onChange={e=>
                        setIncomeDesc(e.target.value)}/>
                    </div>
                </div>
                <div class="col">
                    <label class="control-label col-sm-2"><b>Date:</b></label>
                    <div class="col-sm-10">
                        <input placeholder="Date" type="date" className="form-control" value={date_in} required onChange={e=>
                        setDateIn(e.target.value)}/>
                    </div>
                </div>
            </div>
                
            <div class="form-row">
                <div class="col">
                    <label class="control-label col-sm-2"><b>Income/Expense:</b></label>
                    <div class="col-sm-10">
                        <input type="text" className="form-control" value={category} required onChange={e=> setCategory(e.target.value)}/>
                     </div>
                </div>
                <div class="col">
                    <label class="control-label col-sm-2"><b>Amount:</b></label>
                    <div class="col-sm-10">
                        <input placeholder="Amt(Rs.)" type="text" className="form-control" required value={amt} onChange={e=>
                        setAmt(e.target.value)}/>
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
             <div class="col-sm-offset-2 col-sm-10">
                <button className="btn btn-success" style={{width:'150px', position: 'relative' ,top:'40%', left: '50%' ,color: '#000033'}}><b>ADD</b></button>  
              </div>
            </div>
            </form> 
        </Fragment>
        
        
    );
};


export default AddTrans;