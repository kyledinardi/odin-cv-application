export default function Position({
  isEdit,
  positionId,
  position,
  dates,
  company,
  location,
  duties,
  getInfo,
  addDuty,
  removeDuty,
}) {
  function onInfoChange() {
    const dutyList = Array.from(
      document.querySelectorAll(`[id='${positionId}'] .duty-input`),
    );

    const dutyListValues = dutyList.map((dutyInput) => {
      return { name: dutyInput.value, id: dutyInput.id };
    });

    const newPosition = {
      id: positionId,
      position: document.getElementById(`position-${positionId}`).value,
      dates: document.getElementById(`dates-${positionId}`).value,
      company: document.getElementById(`company-${positionId}`).value,
      location: document.getElementById(`location-${positionId}`).value,
      duties: dutyListValues,
    };

    getInfo(newPosition);
  }

  if (isEdit) {
    return (
      <>
        <div className='standard-input'>
          <label htmlFor={`position-${positionId}`}>Position Title</label>
          <input
            type='text'
            name='position'
            id={`position-${positionId}`}
            value={position}
            onChange={onInfoChange}
            required
          />
          <label htmlFor={`dates-${positionId}`}>Start and End Years</label>
          <input
            type='text'
            name='dates'
            id={`dates-${positionId}`}
            value={dates}
            onChange={onInfoChange}
            required
          />
          <label htmlFor={`company-${positionId}`}>Company</label>
          <input
            type='text'
            name='company'
            id={`company-${positionId}`}
            value={company}
            onChange={onInfoChange}
            required
          />
          <label htmlFor={`location-${positionId}`}>
            Location <span className='optional'>&#40;optional&#41;</span>
          </label>
          <input
            type='text'
            name='location'
            id={`location-${positionId}`}
            value={location}
            onChange={onInfoChange}
          />
        </div>
        <div className='duties'>
          <label>Duties</label>
          <ul>
            {duties.map((duty) => (
              <li className='duty' key={duty.id}>
                <textarea
                  id={duty.id}
                  value={duty.name}
                  className='duty-input'
                  onChange={onInfoChange}
                  rows='5'
                ></textarea>
                <div className='remove-duty'>
                  <button type='button' data-id={duty.id} onClick={removeDuty}>
                    Remove Duty
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button type='button' className='add-duty' onClick={addDuty}>
            Add Duty
          </button>
        </div>
      </>
    );
  } else
    return (
      <div className='position'>
        <p className='position-title larger'>{position}</p>
        <p className='date'>{dates}</p>
        <p className='company'>
          {company}
          {location ? ', ' + location : null}
        </p>
        <ul className='duties'>
          {duties.map((duty, index) => (
            <li className='duty' key={duty.id}>
              {duties[index].name}
            </li>
          ))}
        </ul>
      </div>
    );
}
