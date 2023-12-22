import { useState } from "react";
import './index.css';

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [emailNotifs, setEmailNotifs] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

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

  function validate() {
    let validationErrors = {};

    if (name.length === 0 ) {
      validationErrors["name"]='you must have a name.';
    }

    if (email.length === 0) {
      validationErrors["email"]='you must have an email.';
    }

    if ((phoneNum.length === 0) !== (phoneType.length === 0)) {
      validationErrors["phoneType"]='you must have a phone number selected.';
    }

    if (bio.length > 280){
      validationErrors["bio"]='character limit is 280.';
    }

    console.log(validationErrors);
    return validationErrors;

  }

  function handleSubmit(event) {
    event.preventDefault();
    let errors = validate();

    if (Object.entries(errors).length){
      setErrorMessages(errors);
    } else {
      let user = {
        name,
        email,
        phoneNum,
        phoneType,
        bio,
      };
      console.log(user);
      setErrorMessages({});
    }
    // console.log(errors);
    // console.log(errorMessages);
  }

  const showErrors = () => {


  };
    // if (!errorMessages.length) {
    //   return null;
    // } else {
    //   return(
    //     <ul>
    //       {errorMessages.map((error, idx) => {
    //         return (<li key={idx}>{error}</li>);
    //       })}
    //     </ul>
    //   );
    // }
  

  return (
    <>
    {showErrors()}
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name
        <input type="text" value={name} onChange={handleChange('name')} id="name"/>
      </label>
      <p>{errorMessages["name"]}</p>
      <br />
      <label htmlFor='email'>Email
        <input type="email" value={email} onChange={handleChange('email')} id="email"/>
      </label>
      <p>{errorMessages["email"]}</p>
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
      <p>{errorMessages["phoneType"]}</p>
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
      <p>{errorMessages["bio"]}</p>
      <br />
      <label htmlFor="email-notifs">Email Notificaitons
        <input type="checkbox" onChange={handleChange('emailNotifs')} checked={(emailNotifs) ? true : false}/>
      </label>
      <br />
      <label htmlFor="submit">Submit Form
        <button value="Submit">Submit Form</button>
      </label>
    </form>
    </>
  );
}

 