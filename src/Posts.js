import React , { useState } from 'react';


export default function Posts() {




      const [inputList, setInputList ] = useState("");
      const [Items, setItems ] = useState([]);

      const itemEvent = (event) => {    
          setInputList(event.target.value);
      };

     const listOfItems = () => {
        const  StoreUsername = localStorage.getItem('username');
        alert("Your post is successfully added !");
        setItems((oldItems) => {
            return [...oldItems,StoreUsername, inputList];
        });
     };


    return (
        <div>
            <div className="App container">
    <div className="card m-5 p-5">

    <form>

    <div className="form-group row">
    <div className="col-sm-10">
      <input type="Text" name="post" 
      value={inputList}
        onChange={itemEvent} 
      placeholder="Write Something " className="form-control" id="inputPassword"/>
    </div>
    <div  onClick={listOfItems} className="col-sm-2 btn btn-primary col-form-label">Post</div>
    </div>
  
 </form>  

   
  
           

    </div>
    <div className="">
          {Items.map((itemval)=> {
              return <div className="card p-3">
                                   
                  {itemval}
                  </div>
          })}
      </div>
    </div>
    
        </div>
    )
}
