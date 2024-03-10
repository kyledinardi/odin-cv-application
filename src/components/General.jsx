import { useState } from 'react';

export default function General() {
  const [isEdit, setIsEdit] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    address: '',
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
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
    });
  }

  if (isEdit) {
    return (
      <>
        <form className='general' onSubmit={handleSubmit}>
          <div className='name'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={info.name}
              required
            />
          </div>
          <div className='address'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              defaultValue={info.address}
              required
            />
          </div>
          <div className='phone'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              defaultValue={info.phone}
              required
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              defaultValue={info.email}
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1>{info.name}</h1>
        <h3>{info.address}</h3>
        <h3>{info.phone}</h3>
        <h3>{info.email}</h3>
        <button onClick={editToggle}>Edit</button>
      </>
    );
  }
}
