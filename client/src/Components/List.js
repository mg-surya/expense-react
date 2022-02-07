import React,{ Fragment , useState , useEffect} from "react";

const ListExpenditure = () => {

    const [exp,setExp]=useState([]);

    const deleteExp= async (id) => {
        try {
            const deleteExp = await fetch(`http://localhost:5000/expense/${id}`,{
                method: "DELETE"
            });

           // console.log(deleteExp);
           setExp(exp.filter(e => e.income_id !== id))
        } catch (error) {
            console.error(error.message);
        }
    }

    const getExpenditure= async () => {
        try {
            
            const response= await fetch("http://localhost:5000/expense")
            const jsonData= await response.json();
            //console.log(jsonData);
            setExp(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getExpenditure();
    }, []);

    //console.log(exp);
    return <Fragment>
    <table border="5" bordercolor="#b8b894" width="1100"><td> 
    <table class="table table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Date</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {exp.map(e => (
        <tr key={e.income_id}>
            <td>{e.income_desc}</td>
            <td>{e.date_in}</td>
            <td>{e.category}</td>
            <td>{e.amt}</td>
            <td>
                <button 
                className="btn btn-danger"
                onClick={() =>  deleteExp(e.income_id)}>
                    Delete
                </button>
            </td>
        </tr>
    ))}    
    
    </tbody>
  </table>
  </td>
  </table>
    </Fragment>
};

export default ListExpenditure;