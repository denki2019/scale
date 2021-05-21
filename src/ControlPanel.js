import React, { useState } from "react";
import FingerBoard from './FingerBoard';
import {notes} from './config.js';
import {scales} from './config.js';

const ControlPanel = () => {
  const [scaleType, setScaleType] = useState('0');
  const [noteType, setNoteType] = useState('0');

  const handleScaleTypeChange = (event) => {
    setScaleType(() => event.target.value);
  }

  const handleNoteTypeChange = (event) => {
    setNoteType(() => event.target.value);
  }

  const scale = _getScale(notes[noteType], scales[scaleType]);
  
  return (
    <div>
      <FingerBoard scale={scale} />
      <div>Options</div>
      <div>
        <input type="radio" id="major" name="scale-type" value="0" checked={scaleType==='0'} onChange={handleScaleTypeChange}></input>
        <label htmlFor="major">major scale</label>
      </div>
      <div>
        <input type="radio" id="minor" name="scale-type" value="1" checked={scaleType==='1'} onChange={handleScaleTypeChange}></input>
        <label htmlFor="minor">natural minor scale</label>
      </div>
      <div>
        <input type="radio" id="penta_major" name="scale-type" value="2" checked={scaleType==='2'} onChange={handleScaleTypeChange}></input>
        <label htmlFor="penta_major">penta tonic major scale</label>
      </div>
      <div>
        <input type="radio" id="penta_minor" name="scale-type" value="3" checked={scaleType==='3'} onChange={handleScaleTypeChange}></input>
        <label htmlFor="penta_minor">penta tonic minor scale</label>
      </div>

      <div>
        <input type="radio" id="flat" name="note-type" value="0" checked={noteType==='0'} onChange={handleNoteTypeChange}></input>
        <label htmlFor="flat">flat</label>
      </div>
      <div>
        <input type="radio" id="sharp" name="note-type" value="1" checked={noteType==='1'} onChange={handleNoteTypeChange}></input>
        <label htmlFor="sharp">sharp</label>
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

export default ControlPanel;