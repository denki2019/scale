import Strings from './Strings';
import './FingerBoard.css';
import {tuning} from './config.js';
import {frets} from './config.js';

const FingerBoard = (props) => {
  const positionArray = _getPositionArray(props.scale, tuning);
  const tr = positionArray.map((string, key) => <Strings string={string} root={props.root} key={key} />);
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

const _getPositionArray = (scale, tuning) => {
  let positionArray = [];
  tuning.forEach(item => {
    let string = [];
    for (let i = 0; i <= frets; i++) {
      string.push(scale[item]);
      if (item === 11) {
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