import { withRouter } from 'next/dist/client/router';
import React, {useState} from 'react';
import {
  Label,
  Input,
  Textarea,
  Box,
  Button,
} from 'theme-ui'


const Form = () => {
  const [jobDescription, setJobDescription] = useState("")

  async function checkDatabase() {
    // get the jobDescription
    // lowercase
    // parse the text by spaces, bullet points, new line
    // parse the text into a Set
    const techArray = jobDescription.toLowerCase().split(' ');
    // call the database
    console.log(techArray);


  }

  return (
  <div>
    <Box
    as='form'
    onSubmit={e => {
      e.preventDefault();
      checkDatabase();
      }}>
      <Label htmlFor='comment'>Comment</Label>
      <Textarea
        name='comment'
        id='comment'
        // rows='6'
        mb={3}
        onChange={(event) => setJobDescription(event.target.value)}
      />
      <Button>
        Submit
      </Button>
    </Box>

  </div>
  )

}

export default Form;