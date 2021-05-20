import React, { useState } from "react";
import FingerBoard from './FingerBoard';

const ControlPanel = () => {

  const [value, setValue] = useState(true);

  const handleCheckboxChange = (event) => {
    setValue(() => event.target.checked);
  }

  return (
    <div>
      <FingerBoard major={value}/>
      <div>Options</div>
      <label htmlFor="major">major</label>
      <input type="checkbox" id="major" checked={value} onChange={handleCheckboxChange}></input>
    </div>
  );
}
// EF G A BC D EF G A
// BC D EF G A BC D E
// G A BC D EF G A BC
// D EF G A BC D EF G
// A BC D EF G A BC D
// EF G A BC D EF G A
export default ControlPanel;