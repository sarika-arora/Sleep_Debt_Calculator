/* We are going to write a calculator that calculates sleep debt. The program will ask a user how many hours of sleep is ideal each night, then compare that to the actual hours they slept each night of the last week.

Then, it will calculate the number over or under they are to their sleep goal. */

//Actual sleep hours


const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 6;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 6;
  } else if (day === 'Saturday') {
    return 7;
  } else if (day === 'Sunday') {
    return 9;
  } else {
    return 'Incorrect Day';
  }

};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');


//Ideal sleep hours


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

//Calculate the sleep debt

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  }

  if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed!');
  }

  if (actualSleepHours < idealSleepHours) {
    console.log ('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
  }



};

calculateSleepDebt();
