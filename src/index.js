import 'modern-normalize/modern-normalize.css';
import './styles.scss';
import 'pikaday/css/pikaday.css';
import Pikaday from 'pikaday';

import bootstrap from 'bootstrap';

// import accordeon from 'bootstrap/accordeon';
// console.log(accordeon);

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  theme: 'color:red',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split(' ');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

picker.setDate(new Date());
