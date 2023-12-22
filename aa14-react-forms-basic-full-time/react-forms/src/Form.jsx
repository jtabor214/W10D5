import { useState } from "react";


export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [phoneTyp, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [signUp, setSignUp] = useState(false);

  

  return (
    <form>
      <label htmlFor='name'>Name
        <input type="text" value={name} id="name"/>
      </label>
      <br />
      <label htmlFor='email'>Email
        <input type="email" value={email} id="email"/>
      </label>
      <br />
      <label htmlFor='phone-number'>Phone Number
        <input type="tel" value={phoneNum} id="phone-number"/>
      </label>
      <br />
      <label htmlFor='phone-type'>Phone Type </label>
      <select name="phone-type" value={phoneTyp} id="phone-type">
        <option value="">Please choose an option</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="mobile">Mobile</option>
      </select>
      <br />
      <label htmlFor="staff">Staff:
        <input type="radio" value="Instructor" checked={(staff === "Instructor") ? "true" : "false"} />
        <input type="radio" value="Student" checked={(staff === "Student") ? "true" : "false"} />
      </label>
      <br />
      <label htmlFor="bio">Bio
        <input type="text" id="bio-field" value={bio}/>
      </label>
      <br />
      <label htmlFor="sign-up">Email Notificaitons
        <input type="checkbox" checked={(signUp) ? "true" : "false"}/>
      </label>
      <br />
      <label htmlFor="submit">Submit Form
        <button value="Submit"></button>
      </label>
    </form>
  );
}

 