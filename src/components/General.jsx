import { useState } from 'react';

export default function General() {
  const [isEdit, setIsEdit] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    email: '',
  });

  function editToggle() {
    setIsEdit(!isEdit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editToggle();
    setInfo({
      ...info,
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
    });
  }

  if (isEdit) {
    return (
      <>
        <form className='general' onSubmit={handleSubmit}>
          <div className='standard-input'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={info.name}
              required
            />
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              defaultValue={info.address}
              required
            />
            <label htmlFor='city'>City, State</label>
            <input
              type='text'
              name='city'
              id='city'
              defaultValue={info.city}
              required
            />
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              defaultValue={info.phone}
              required
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              defaultValue={info.email}
              required
            />
          </div>
          <div className='general-submit'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <div className='general-content'>
        <h1>{info.name}</h1>
        <p className='larger'>
          {info.address}, {info.city}
        </p>
        <p className='larger'>{info.phone}</p>
        <p className='larger'>{info.email}</p>
        <button onClick={editToggle}>Edit</button>
      </div>
    );
  }
}
