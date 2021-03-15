import React from "react";

export default function KgRegister() {
  const [user, setUser] = useState({
    kgName: "",
    phoneNumber: "",
    email: "",
    street: "",
    number: "",
    city: "",
    postcode: "",
    verificationCode: "",
  });

  const submitForm = e => {
    e.preventDefault();
  };

  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Kindergarten Name
          <input
            type='text'
            name='kgName'
            placeholder='Kindergarten Name'
            onChange={grabValue}
          />
        </label>
        <label>
          Phone Number
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            onChange={grabValue}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
            onChange={grabValue}
          />
        </label>
        <label>
          Address
          <input
            type='text'
            name='street'
            placeholder='Street'
            onChange={grabValue}
          />
          <input
            type='text'
            name='number'
            placeholder='Number'
            onChange={grabValue}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={grabValue}
          />
        </label>
        <label>
          Verification Code
          <input
            type='text'
            name='kgID'
            placeholder='Kindergarten ID'
            onChange={grabValue}
          />
        </label>
        <input type='submit' value='Register' />
        <Link to='/'>
          <input type='submit' value='Cancel' />
        </Link>
      </form>
    </div>
  );
}
