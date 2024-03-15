import { useState } from 'react';

export default function Degree({
  isEdit,
  degreeId,
  degree,
  field,
  date,
  school,
  dissertation,
  getInfo,
}) {
  const [isDoctor, setisDoctor] = useState(degree === 'Doctorate');

  function onInfoChange() {
    const newDegree = {
      id: degreeId,
      degree: document.getElementById(`degree-${degreeId}`).value,
      field: document.getElementById(`field-${degreeId}`).value,
      date: document.getElementById(`date-${degreeId}`).value,
      school: document.getElementById(`school-${degreeId}`).value,

      dissertation: isDoctor
        ? document.getElementById(`dissertation-${degreeId}`).value
        : null,
    };

    getInfo(newDegree);
  }

  function handleDegreeChange(e) {
    onInfoChange();
    setisDoctor(e.target.value === 'Doctorate');
  }

  const dissertationInput = (
    <>
      <label htmlFor={`dissertation-${degreeId}`}>Dissertation Title</label>
      <textarea
        name='dissertation'
        id={`dissertation-${degreeId}`}
        rows='5'
        value={dissertation || ''}
        onChange={onInfoChange}
        required
      />
    </>
  );

  const dissertationText = (
    <p className='dissertation'>
      Dissertation Title: <em>{dissertation}</em>
    </p>
  );

  if (isEdit) {
    return (
      <>
        <div className='standard-input'>
          <label htmlFor={`degree-${degreeId}`}>Degree</label>
          <select
            name='degree'
            id={`degree-${degreeId}`}
            onChange={handleDegreeChange}
            required
          >
            <option value={degree}></option>
            <option value="Associate's">Associate&apos;s</option>
            <option value="Bachelor's">Bachelor&apos;s</option>
            <option value="Master's">Master&apos;s</option>
            <option value='Doctorate'>Doctorate</option>
          </select>
          <label htmlFor={`field-${degreeId}`}>Field of Study</label>
          <input
            type='text'
            name='field'
            id={`field-${degreeId}`}
            value={field}
            onChange={onInfoChange}
            required
          />
          <label htmlFor={`date-${degreeId}`}>End Date</label>
          <input
            type='text'
            name='date'
            id={`date-${degreeId}`}
            value={date}
            onChange={onInfoChange}
            required
          />
          <label htmlFor={`school-${degreeId}`}>School Name</label>
          <input
            type='text'
            name='school'
            id={`school-${degreeId}`}
            value={school}
            onChange={onInfoChange}
            required
          />
          {isDoctor ? dissertationInput : null}
        </div>
      </>
    );
  } else
    return (
      <div className='degree'>
        <p className='degree-and-field'>
          {degree} in {field}
        </p>
        <p className='date'>{date}</p>
        <p className='school'>{school}</p>
        {isDoctor ? dissertationText : null}
      </div>
    );
}
