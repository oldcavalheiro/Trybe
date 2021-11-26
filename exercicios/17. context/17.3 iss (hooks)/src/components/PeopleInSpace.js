import React, { useContext } from 'react';

import useTimer from '../effects/useTimer';

import ISSContext from '../context/ISSContext';

const TEN_SECONDS = 10000;

const PeopleInSpace = () => {
  const { peopleInSpace, fetchPeopleInSpace } = useContext(ISSContext);

  useTimer(fetchPeopleInSpace, TEN_SECONDS);

  return (
    <div className="people-in-space">
      <span>{`Number of people in space now: ${peopleInSpace.length}`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => (
          <li key={ name }>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleInSpace;
