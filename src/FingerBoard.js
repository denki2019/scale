import Strings from './Strings';
import './FingerBoard.css';
import {scales} from './config.js';
import {tuning} from './config.js';
import {frets} from './config.js';

const FingerBoard = () => {
  const positionArray = getPositionArray(scales, tuning);
  const tr = positionArray.map((string, key) => <Strings string={string} key={key} />);
  const th = positionArray[0].map((item, key) => <th key={key} style={{width: 130 - key * 4 + 'px'}}></th>);
  const tr_last = positionArray[0].map((item, key) => <td key={key} ></td>);

  return (
      <table>
        <thead>
          <tr>{th}</tr>
        </thead>
        <tbody>
          {tr}
          <tr>{tr_last}</tr>
        </tbody>
      </table>
  );
}

const getPositionArray = (scales, tuning) => {
  let positionArray = [];
  tuning.forEach(item => {
    let string = [];
    for (let i = 0; i <= frets; i++) {
      string.push(scales[item]);
      if (item !== 2 && item !== 6 && i !== frets) {
        string.push('');
        i++;
      }
      if (item === 6) {
        item = 0;
      } else {
        item++;
      }
    }
    positionArray.push(string);
  });
  return positionArray;
}

export default FingerBoard;