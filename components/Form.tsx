import React from 'react';
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Button,
  Flex,
} from 'theme-ui'

const Form = () => {


  return (
  <div>
    <Box
    as='form'
    onSubmit={e => e.preventDefault()}>
      <Label htmlFor='comment'>Comment</Label>
      <Textarea
        name='comment'
        id='comment'
        // rows='6'
        mb={3}
      />
      <Button>
        Submit
      </Button>
    </Box>

  </div>
  )

}

export default Form;