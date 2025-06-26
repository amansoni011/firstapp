import { useState } from "react";

function Form() {
    const [values,setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    contact:'',
    gender:'',
    subject:'',
    resume:'',
    url:'', 
    answer:'',
    message:''
    });
    
const handleChanges = (e) =>{
  setValues({...values,[e.target.name]:e.target.value})
}

    const handleSubmit = (e) =>{
    e.preventDefault()
    if(values.email==''||values.firstName=='' || values.lastName=='' || values.contact==''){
      alert("fill all required fields..");
    }else {
      alert("Form Submitted")
    }
    console.log(values);
    }

    return(
       <>
         <div className="formApp">
     <form onSubmit={handleSubmit}>
      <h1>My form in React</h1>
      
      <label htmlFor="Name">First Name<span>*</span></label>
      <input name='firstName' type="text" placeholder='Enter First Name'
      onChange={(e)=>handleChanges(e)} />
      
      <label htmlFor="lastName">Last Name<span>*</span></label>
      <input name="lastName" type="text" placeholder='Enter Last Name'
        onChange={(e)=>handleChanges(e)} />
      
      <label htmlFor="Email">Enter Email<span>*</span></label>
      <input type="email" name="email" id="Email" placeholder='Enter email'
        onChange={(e)=>handleChanges(e)}/> 

      <label htmlFor="Contact">Contact<span>*</span></label>
      <input type="text" name="contact" id="Contact" placeholder='Enter Mobile number' 
        onChange={(e)=>handleChanges(e)} />
    
      <label htmlFor="Gender">Gender</label>
     <div className="Gen-radio">
       <input type="radio"  name="gender" id="Male" 
         onChange={(e)=>handleChanges(e)} />
      <label htmlFor="Male">Male</label>
      <input type="radio" name="gender"
        onChange={(e)=>handleChanges(e)} />
      <label htmlFor="Female">Female</label>
      <input type="radio" name="gender" id="Other" 
        onChange={(e)=>handleChanges(e)} />
      <label htmlFor="Other">Other</label>
     </div>

     <label >Your Best Subject</label>
     <div className="bestSub"> 
      <input type="checkbox" name='subject'id='English' onChange={(e)=>handleChanges(e)} />
      <label htmlFor="English">English</label>
      <input type="checkbox" name='subject' id='Hindi' 
        onChange={(e)=>handleChanges(e)} />
      <label htmlFor="Hindi">Hindi</label>
      <input type="checkbox" name='subject' id='Maths'
        onChange={(e)=>handleChanges(e)} />
      <label htmlFor="Maths">Maths</label>
     </div>

    <label>Upload Resume<span>*</span></label>
      <input type="file" name="resume" id="file"
        onChange={(e)=>handleChanges(e)} />

      <label>Enter URL</label>
      <input type="url" name="url" placeholder='Enter url' 
        onChange={(e)=>handleChanges(e)} />
      
      <label htmlFor='answer'>Select for your Answer:</label>
      <select id='answer' name='answer'   onChange={(e)=>handleChanges(e)} >
        <option value="">Select Answer</option>
        <option value="Ans 1">Answer1</option>
        <option value="Ans2">Answer2</option>
        <option value="Ans 3">Answer3</option>
        <option value="Ans 4">Answer4</option>
      </select>

     
     <label htmlFor="message">About</label>
     <textarea id="message" name="message" rows="5" cols="40" 
       onChange={(e)=>handleChanges(e)} placeholder="About your self"></textarea>

      <div className="btn">
           <button type="button">Reset</button>
           <button type="submit">Submit</button>
      </div>
     </form>
    </div>
       </>  
    );
}
export default Form;