import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AdminCreate() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          id="outlined-textarea"
          label="Infos"
          placeholder="Vos infos"
          value={value}
          onChange={handleChange}
          multiline
        />

      </div>

    </Box>
  );
}
export default React.memo(AdminCreate);