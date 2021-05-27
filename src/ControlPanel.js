import React, { useState } from "react";
import FingerBoard from './FingerBoard';
import './ControlPanel.css';
import {notes} from './config.js';
import {scales} from './config.js';

const ControlPanel = () => {
  const [scaleType, setScaleType] = useState(0);
  const [noteType, setNoteType] = useState(0);
  const [key, setKey] = useState(0);

  const handleScaleTypeChange = (event) => {
    setScaleType(() => Number(event.target.value));
  }

  const handleNoteTypeChange = (event) => {
    setNoteType(() => Number(event.target.value));
  }

  const handleKeyChange = (event) => {
    setKey(() => Number(event.target.value));
  }

  const scaleArr = _changeKey(scales[scaleType], key);
  const scale = _getScale(notes[noteType], scaleArr);
  
  return (
    <div>
      <FingerBoard scale={scale} root={notes[noteType][key * 7 % 12]} />
      <div className="optionsPanel">
        <h2 className="optionsPanelTitle">Options</h2>

        <h4>Key</h4>
        <div className="optionGroup">
          <div className="optionItem">
            <input type="radio" id="c" name="key" value="0" checked={key===0} onChange={handleKeyChange}></input>
            <label htmlFor="c">C</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="g" name="key" value="1" checked={key===1} onChange={handleKeyChange}></input>
            <label htmlFor="g">G</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="d" name="key" value="2" checked={key===2} onChange={handleKeyChange}></input>
            <label htmlFor="d">D</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="a" name="key" value="3" checked={key===3} onChange={handleKeyChange}></input>
            <label htmlFor="a">A</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="e" name="key" value="4" checked={key===4} onChange={handleKeyChange}></input>
            <label htmlFor="e">E</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="b" name="key" value="5" checked={key===5} onChange={handleKeyChange}></input>
            <label htmlFor="b">B</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="f_sharp" name="key" value="6" checked={key===6} onChange={handleKeyChange}></input>
            <label htmlFor="f_sharp">F♯</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="c_sharp" name="key" value="7" checked={key===7} onChange={handleKeyChange}></input>
            <label htmlFor="c_sharp">C♯</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="a_flat" name="key" value="8" checked={key===8} onChange={handleKeyChange}></input>
            <label htmlFor="a_flat">A♭</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="e_flat" name="key" value="9" checked={key===9} onChange={handleKeyChange}></input>
            <label htmlFor="e_flat">E♭</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="b_flat" name="key" value="10" checked={key===10} onChange={handleKeyChange}></input>
            <label htmlFor="b_flat">B♭</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="f" name="key" value="11" checked={key===11} onChange={handleKeyChange}></input>
            <label htmlFor="f">F</label>
          </div>
        </div>

        <h4>Scale</h4>
        <div className="optionGroup">
          <div className="optionItem">
            <input type="radio" id="major" name="scale-type" value="0" checked={scaleType===0} onChange={handleScaleTypeChange}></input>
            <label htmlFor="major">major scale</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="minor" name="scale-type" value="1" checked={scaleType===1} onChange={handleScaleTypeChange}></input>
            <label htmlFor="minor">natural minor scale</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="penta_major" name="scale-type" value="2" checked={scaleType===2} onChange={handleScaleTypeChange}></input>
            <label htmlFor="penta_major">penta tonic major scale</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="penta_minor" name="scale-type" value="3" checked={scaleType===3} onChange={handleScaleTypeChange}></input>
            <label htmlFor="penta_minor">penta tonic minor scale</label>
          </div>
        </div>

        <h4>Display</h4>
        <div className="optionGroup">
          <div className="optionItem">
            <input type="radio" id="flat" name="note-type" value="0" checked={noteType===0} onChange={handleNoteTypeChange}></input>
            <label htmlFor="flat">flat</label>
          </div>
          <div className="optionItem">
            <input type="radio" id="sharp" name="note-type" value="1" checked={noteType===1} onChange={handleNoteTypeChange}></input>
            <label htmlFor="sharp">sharp</label>
          </div>
        </div>
      </div>
    </div>
  );
}


const _getScale = (notes, scaleArr) => {
  let scale = [];
  for (let i = 0; i < scaleArr.length; i++) {
    const item = scaleArr[i];
    if (item) {
      scale.push(notes[i]);
    } else {
      scale.push('');
    }
  }
  return scale;
}

const _changeKey = (scaleArr, key) => {
  let offset = key * 5 % 12;
  let arr = [];
  for (let i = 0; i < scaleArr.length; i++) {
    offset = offset === scaleArr.length ? 0 : offset;
    arr.push(scaleArr[offset]);
    offset++;
  }
  return arr;
}

export default ControlPanel;