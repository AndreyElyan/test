import React, { memo, useState, useCallback } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import { Container } from './styles';

const Calendar = ({ setDate }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = useCallback(
    (day, { selected }) => {
      if (selected) {
        const selectedIndex = selectedDays.findIndex(selectedDay =>
          DateUtils.isSameDay(selectedDay, day)
        );
        selectedDays.splice(selectedIndex, 1);
      } else {
        selectedDays.push(day);
      }

      const newSelectDays = [...selectedDays];

      setSelectedDays(newSelectDays);
      if (setDate) setDate(newSelectDays);
    },
    [selectedDays, setDate]
  );

  return (
    <Container>
      <DayPicker selectedDays={selectedDays} onDayClick={handleDayClick} />
    </Container>
  );
};

export default memo(Calendar);
