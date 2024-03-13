import { useState } from 'react';
import Degree from './Degree';

export default function Education() {
  const [isEdit, setIsEdit] = useState(true);
  const [degrees, setDegrees] = useState([
    {
      id: 0,
      degree: '',
      field: '',
      date: '',
      school: '',
      dissertation: null,
    },
  ]);

  let count = 0;

  degrees.forEach((degree) => {
    while (degree.id === count) {
      count += 1;
    }
  });

  function editToggle() {
    setIsEdit(!isEdit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editToggle();
  }

  function handleInfo(newDegree) {
    const newDegreeList = degrees.map((degree) => {
      return degree.id === newDegree.id ? newDegree : degree;
    });

    setDegrees(newDegreeList);
  }

  function addDegree() {
    setDegrees([
      ...degrees,
      {
        id: count,
        degree: '',
        field: '',
        date: '',
        school: '',
        dissertation: null,
      },
    ]);
  }

  function removeDegree(degreeId) {
    if (degrees.length === 1) {
      setDegrees([
        {
          id: 0,
          degree: '',
          field: '',
          date: '',
          school: '',
          dissertation: null,
        },
      ]);
    } else {
      setDegrees(degrees.filter((degree) => degree.id !== degreeId));
    }
  }

  if (isEdit) {
    return (
      <form className='education' onSubmit={handleSubmit}>
        {degrees.map((degree) => (
          <div className='degree' id={degree.id} key={degree.id}>
            <Degree
              isEdit={isEdit}
              degreeId={degree.id}
              degree={degree.degree}
              field={degree.field}
              date={degree.date}
              school={degree.school}
              dissertation={degree.dissertation}
              getInfo={handleInfo}
            />
            <button type='button' onClick={() => removeDegree(degree.id)}>
              Remove Degree
            </button>
          </div>
        ))}
        <button onClick={addDegree}>Add Degree</button>
        <button type='submit'>Submit</button>
      </form>
    );
  } else
    return (
      <div className='education'>
        {degrees.map((degree) => (
          <Degree
            isEdit={isEdit}
            key={degree.id}
            degreeId={degree.id}
            degree={degree.degree}
            field={degree.field}
            date={degree.date}
            school={degree.school}
            dissertation={degree.dissertation}
          />
        ))}
        <button onClick={editToggle}>Edit</button>
      </div>
    );
}
