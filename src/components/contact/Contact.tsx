import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

export default function Contact(): React.ReactElement {
  const [state, handleSubmit] = useForm('mkndgrkd');

  return (
    <div>
      {state.succeeded && <p>Votre email a bien été envoyé !</p>}
      {!state.succeeded && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Votre adresse mail</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}