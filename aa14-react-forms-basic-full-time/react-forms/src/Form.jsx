import { useState } from "react";


export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [emailNotifs, setEmailNotifs] = useState(false);

  function handleChange(field) {
    return (event) => {
      switch (field) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phoneNum":
        setPhoneNum(event.target.value);
        break;
      case "phoneType":
        setPhoneType(event.target.value);
        break;
      case "staff":
        //event.target.value is either "intsturcot" or "student"
        if (event.target.checked) {
          setStaff(event.target.value);
        } else {
          setStaff(event.target.value);
        }
        break;
      case "bio":
        setBio(event.target.value);
        break;
      case "emailNotifs":
        if (event.target.checked) {
          setEmailNotifs(true);
        } else {
          setEmailNotifs(false);
        }
        break;
      }

    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    // let
    console.log(name, email, phoneNum, phoneType, staff, bio, emailNotifs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name
        <input type="text" value={name} onChange={handleChange('name')} id="name"/>
      </label>
      <br />
      <label htmlFor='email'>Email
        <input type="email" value={email} onChange={handleChange('email')} id="email"/>
      </label>
      <br />
      <label htmlFor='phone-number'>Phone Number
        <input type="tel" value={phoneNum} onChange={handleChange('phoneNum')} id="phone-number"/>
      </label>
      <br />
      <label htmlFor='phone-type'>Phone Type </label>
      <select name="phone-type" value={phoneType} onChange={handleChange('phoneType')} id="phone-type">
        <option value="">Please choose an option</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="mobile">Mobile</option>
      </select>
      <br />
      <label htmlFor="staff">Staff?
        <br/>
        <input type="radio" value="Instructor" onChange={handleChange('staff')} checked={(staff === "Instructor") ? true : false} />
        <label>Instructor</label>
        <input type="radio" value="Student" onChange={handleChange('staff')} checked={(staff === "Student") ? true : false} />
        <label>Student</label>
      </label>
      <br />
      <label htmlFor="bio">Bio
        <input type="text" id="bio-field" value={bio} onChange={handleChange('bio')}/>
      </label>
      <br />
      <label htmlFor="email-notifs">Email Notificaitons
        <input type="checkbox" onChange={handleChange('emailNotifs')} checked={(emailNotifs) ? true : false}/>
      </label>
      <br />
      <label htmlFor="submit">Submit Form
        <button value="Submit">Submit Form</button>
      </label>
    </form>
  );
}

 