import React from 'react';
import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
// export { options } from './Select';

const options = [
  { label: 'aag', value: 'aag' },
  { label: 'ackbar', value: 'ackbar' },
  { label: 'afraid', value: 'afraid' },
  { label: 'agnes', value: 'agnes' },
  { label: 'aint-got-time', value: 'aint-got-time' },
  { label: 'ams', value: 'ams' },
  { label: 'ants', value: 'ants' },
  { label: 'apcr', value: 'apcr' },
  { label: 'astronaut', value: 'astronaut' },
  { label: 'atis', value: 'atis' },
  { label: 'away', value: 'away' },
  { label: 'awesome', value: 'awesome' },
  { label: 'awesome-awkward', value: 'awesome-awkward' },
  { label: 'awkward', value: 'awkward' },
  { label: 'awkward-awesome', value: 'awkward-awesome' },
  { label: 'bad', value: 'bad' },
  { label: 'badchoice', value: 'badchoice' },
  { label: 'bd', value: 'bd' },
  { label: 'because', value: 'because' },
  { label: 'bender', value: 'bender' },
  { label: 'bihw', value: 'bihw' },
  { label: 'bilbo', value: 'bilbo' },
  { label: 'biw', value: 'biw' },
  { label: 'blb', value: 'blb' },
  { label: 'boat', value: 'boat' },
  { label: 'bongo', value: 'bongo' },
  { label: 'both', value: 'both' },
  { label: 'doge', value: 'doge' },
];

const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ width: '490px', marginLeft: '24px' }}>
      <h1>Select Memes</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        label={selected}
        value={selected}
        onChange={setSelected}
        // labelledBy="Select"
      />
    </div>
  );
};

export default Example;
