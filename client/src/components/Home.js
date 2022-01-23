import React from 'react'

export default function Home({ header }) {

  return (
    <div>
      {header}
      <div class="home">
        <p>
          Down to meditate? Into yoga? Always on the move? Log your self-care
          sessions using the menu below, and keep track of your kick-ass
          routines as you practice. Or, add a new routine entirely. You do you!
        </p>
      </div>
    </div>
  );
}

/* <div>
        <h3>Select activity</h3>
        <select
          id="selection_dropdown"
          name="dropdown_activities"
          value={activity}
          onChange={handleSelectChange}
        >
          <option value="meditation">Meditation</option>
          <option value="yoga">Yoga</option>
          <option value="cardio">Cardio</option>
          <option value="add_new">Add new routine</option>
        </select>
      </div> */