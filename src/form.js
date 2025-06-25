function Form() {
    function myFun(){
        console.log("chick ho gaya")
    }
    return(
       <>
         <div className="formApp">
     <form action={myFun}>
      <h1>My form in React</h1>
      
      <label htmlFor="Name">First Name<span>*</span></label>
      <input name='Name' type="text" placeholder='Enter First Name' />
      
      <label htmlFor="last">Last Name<span>*</span></label>
      <input id='last' type="text" placeholder='Enter Last Name' />
      
      <label htmlFor="Email">Enter Email<span>*</span></label>
      <input type="email" name="" id="Email" placeholder='Enter email'/> 

      <label htmlFor="Contact">Contact<span>*</span></label>
      <input type="tel" name="" id="Contact" placeholder='Enter Mobile number' />
    
      <label>Gender<span>*</span></label>
     <div className="Gen-radio">
       <input type="radio"  name="Gender" id="Male" />
      <label htmlFor="Male">Male</label>
      <input type="radio" name="Gender" id="Female" />
      <label htmlFor="Female">Female</label>
      <input type="radio" name="Gender" id="Other" />
      <label htmlFor="Other">Other</label>
     </div>

     <label >Your Best Subject<span>*</span></label>
     <div className="bestSub"> 
      <input type="checkbox" name='Subject'id='English' value="English" />
      <label htmlFor="English">English</label>
      <input type="checkbox" name='Subject' id='Hindi' value="Hindi" />
      <label htmlFor="Hindi">Hindi</label>
      <input type="checkbox" name='Subject' id='Maths' value="Maths" />
      <label htmlFor="Maths">Maths</label>
     </div>

    <label>Upload Resume<span>*</span></label>
      <input type="file" name="" id="file"/>

      <label>Enter URL<span>*</span></label>
      <input type="url" placeholder='Enter url' />
      
      <label htmlFor='answer'>Select your Answer:</label>
      <select id='answer' name='answer'>
        <option value="1">Select Answer</option>
        <option value="1">Answer1</option>
        <option value="2">Answer2</option>
        <option value="3">Answer3</option>
        <option value="4">Answer4</option>
      </select>

     
     <label for="message">About <span>*</span></label>
     <textarea id="message" name="message" rows="5" cols="40" placeholder="About your self"></textarea>

      <div className="btn">
           <button type="reset" >Reset</button>
           <button type="submit" onClick={myFun}>Submit</button>
      </div>
     </form>
    </div>
       </>  
    );
}
export default Form;