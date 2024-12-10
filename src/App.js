import { useState } from "react";
import "./App.css";

function App() {
  const [formData,setFormdata]=useState({firstname:"",lastname:"",email:"",country:" ",streetadress:"",city:"",postalddress:"",
    comments:false,candidates:true,offer:false,radiotypes:"",
  });

  console.log(formData);
  function changehandler(event){
    setFormdata((prev)=>{
      return {
        ...prev,[event.target.name]:event.target.type==="checkbox"?event.target.checked:event.target.value
      }
    })
    
  }
  return (
    <div className="flex justify-center">
      <div className=" shadow-lg">
        <form className="bg-white flex flex-col  my-9">
          <label htmlFor="firstname" className="mx-3 font-semibold">First name<br></br></label>
          <input className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
          type="text"
          placeholder="Pranay"
          name="firstname"
          onChange={changehandler}
          value={formData.firstname}
          ></input>

<label htmlFor="lastname" className="mx-3 font-semibold">Last name<br></br></label>
          <input
          className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
          type="text"
          placeholder="gupta"
          name="lastname"
          onChange={changehandler}
          value={formData.lastname}
          ></input>

    <label htmlFor="email" className="mx-3 font-semibold">Email address</label>
    <input className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
     type="email" placeholder="pgupta@gmail.com" name="email" onChange={changehandler} value={formData.email}></input>


      <label htmlFor="country" className="mx-3 font-semibold"> Country</label>
      <select className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
      name="country" id="country"  value={formData.country}
      onChange={changehandler} >
      <option value={"Hindustan"}>Hindustan</option>
      <option value={"usa"}>usa</option>
      <option value={"canada"}>canada</option>
      <option value={"mexico"}>mexico</option>
      </select>
      
    <label htmlFor="streetadress" className="mx-3 font-semibold">street adress</label>
    <input className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
     type="text" placeholder="mx-3 123e-street" name="streetadress" onChange={changehandler} value={formData.streetadress}></input>
    <label htmlFor="city" className="mx-3 font-semibold">city</label>
    <input className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
    type="text" placeholder="dwarka" name="city" onChange={changehandler} value={formData.city}></input>
    <label htmlFor="postalddress" className="mx-3 font-semibold">zip/Postaladress</label>
    <input className="mx-3 my-2 p-2 border-solid border-blue-300 border-2 rounded-lg w-[600px]"
     type="number" placeholder="1234" name="postalddress" onChange={changehandler} value={formData.postalddress}></input>
     <label htmlFor="" className="mx-3 font-semibold">By Emails</label>
      <div className="">
      <div className="flex flex-row " >
      <input type="checkbox" className="mb-3 w-4 mx-2" name="comments" checked={formData.comments} onChange={changehandler}></input>
      <div className="">
      <label htmlFor="comments " className="font-semibold">comments</label>
      <p className="text-gray-400">Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      <div className="flex flex-row ">
      <input className="mb-3 w-4 mx-2" type="checkbox" name="candidates" checked={formData.candidates} onChange={changehandler}></input>
      <div className="py-3">
      <label htmlFor="candidates" className="font-semibold">Candidates</label>
      <p className="text-gray-400">Get notified when a candidate applies for a job.

</p>
      </div>
      </div>
      <div className="flex flex-row ">
      <input className="mb-3 w-4 mx-2" type="checkbox" name="offer" checked={formData.offer} onChange={changehandler}></input>
      <div className="mx-1">
      <label htmlFor="offer" className="font-semibold">Offers</label>
      <p className="text-gray-400">Get notified when a candidate accepts or rejects an offer.</p>
      </div>
      </div>
      <label className="font-semibold mx-3">Push Notifications
      </label>
      <p className="text-gray-400 mx-3">These are delivered via SMS to your mobile phone.
</p>
    <div className="mx-3">
      <div className="my-4">
        <input type="radio" id="first"value="sameemail" onChange={changehandler} name="radiotypes"   checked={formData.radiotypes==="sameemail"}></input>
        <label htmlFor="first" className="font-semibold gap-3 mx-2">same as email</label>
      </div>
      <div className="my-4">
        <input type="radio" id="second" onChange={changehandler} value="everything" name="radiotypes"  checked={formData.radiotypes==="everything"}></input>
        <label htmlFor="second" className="font-semibold gap-3 mx-2">everything</label>
      </div>
      <div className="my-4">
        <input id="third" onChange={changehandler} className="" type="radio" value="no_push_notification" name="radiotypes" id="everything" checked={formData.radiotypes==="no_push_notification"}></input>
        <label htmlFor="third" className="font-semibold gap-3 mx-2 ">no push notification</label>
      </div>
    </div>
    <button className="p-4 rounded mx-3 py-3 my-2 text-white font-bold bg-blue-500">Save</button>


      </div>




        </form>
      </div>
    </div>

  );
}

export default App;
