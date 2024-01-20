import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

import './Contact.scss';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';

export default function Contact(): React.ReactElement {
  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  function isFormInvalid(): boolean {
    return state.submitting;
  }

  return (
    <div>
      {state.succeeded && (
        <div>
          <p>Votre email a bien été envoyé !</p>
          <Button onClick={reset}>Envoyer un nouveau mail</Button>
        </div>
      )}
      {!state.succeeded && (
        <form onSubmit={handleSubmit}>
          <Box id="contact-form" component={'section'} gap={4}>
            <div id="contact-informations">
              <TextField id="name" type="text" name="name" label="Votre nom et prénom" variant="outlined" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <TextField id="email" type="email" name="email" label="Votre adresse mail" variant="outlined" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <TextField id="message" type="message" name="message" label="Message" multiline rows={8} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button id="submit-button" type="submit" disabled={isFormInvalid()} variant="contained">
              Envoyer
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}
