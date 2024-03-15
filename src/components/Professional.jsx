import { useState } from 'react';
import Position from './Position';

export default function Professional() {
  const [isEdit, setIsEdit] = useState(true);
  const [positions, setPositions] = useState([
    {
      id: 0,
      position: '',
      dates: '',
      company: '',
      location: '',
      duties: [{ name: '', id: crypto.randomUUID() }],
    },
  ]);

  function editToggle() {
    setIsEdit(!isEdit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editToggle();
  }

  function handleInfo(newPosition) {
    const newPositionList = positions.map((position) => {
      return position.id === newPosition.id ? newPosition : position;
    });

    setPositions(newPositionList);
  }

  function addPosition() {
    let count = 0;

    positions.forEach((position) => {
      while (position.id === count) {
        count += 1;
      }
    });

    setPositions([
      ...positions,
      {
        id: count,
        position: '',
        dates: '',
        company: '',
        location: '',
        duties: [{ name: '', id: crypto.randomUUID() }],
      },
    ]);
  }

  function removePosition(positionId) {
    if (positions.length === 1) {
      setPositions([
        {
          id: 0,
          position: '',
          dates: '',
          company: '',
          location: '',
          duties: [{ name: '', id: crypto.randomUUID() }],
        },
      ]);
    } else {
      setPositions(positions.filter((position) => position.id !== positionId));
    }
  }

  function addDuty(positionWithNewDuty) {
    const newPositions = positions.map((position) => {
      if (positionWithNewDuty.id === position.id) {
        position.duties.push({ name: '', id: crypto.randomUUID() });
      }

      return position;
    });

    setPositions(newPositions);
  }

  function removeDuty(positionToBeChanged, e) {
    const newPositions = positions.map((position) => {
      if (positionToBeChanged.id === position.id) {
        if (position.duties.length === 1) {
          position.duties = [{ name: '', id: crypto.randomUUID() }];
        } else {
          position.duties = position.duties.filter(
            (duty) => duty.id !== e.target.dataset.id,
          );
        }
      }

      return position;
    });

    setPositions(newPositions);
  }

  if (isEdit) {
    return (
      <form className='professional' onSubmit={handleSubmit}>
        {positions.map((position) => (
          <div className='position' id={position.id} key={position.id}>
            <Position
              isEdit={isEdit}
              positionId={position.id}
              position={position.position}
              dates={position.dates}
              company={position.company}
              location={position.location}
              duties={position.duties}
              getInfo={handleInfo}
              addDuty={() => addDuty(position)}
              removeDuty={(e) => removeDuty(position, e)}
            />
            <button type='button' onClick={removePosition}>
              Remove Position
            </button>
          </div>
        ))}
        <button type='button' onClick={addPosition}>
          Add Position
        </button>
        <button type='submit'>Submit</button>
      </form>
    );
  } else
    return (
      <div className='professional'>
        {positions.map((position) => (
          <Position
            isEdit={isEdit}
            key={position.id}
            positionId={position.id}
            position={position.position}
            dates={position.dates}
            company={position.company}
            location={position.location}
            duties={position.duties}
          />
        ))}
        <button onClick={editToggle}>Edit</button>
      </div>
    );
}
