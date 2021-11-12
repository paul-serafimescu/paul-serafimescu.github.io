import * as React from 'react';
import {
  useForm,
  ValidationError
} from '@formspree/react';
import Container from 'react-bootstrap/Container';

type ContactProps = {};

export const Contact: React.FC<ContactProps> = () => {

  const [state, handleSubmit] = useForm('xrgrzlnp');

  const renderForm = () => {
    return !state.succeeded ?
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name/Organization</label>
        <input type="text" id="name" name="name" placeholder="Your name/organization..." />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email..." />
        <label htmlFor="subject">Message</label>
        <textarea className="message-field" id="subject" name="subject" placeholder="Your message..."></textarea>
        <ValidationError errors={state.errors} />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <input type="submit" disabled={state.submitting} value="Send" />
        </div>
      </form> :
    <h4 className="subtitle-a">Thank you for reaching out!</h4>
  }

  return (
    <section id="contact">
      <Container>
        <div className="title-box text-center">
          <h1 className="title-a">CONTACT</h1>
          <h4 className="subtitle-a">Feel free to reach out!</h4>
          <div className="line-mf" />
        </div>
        <Container className="d-flex flex-column align-items-center justify-content-center">
          {renderForm()}
        </Container>
      </Container>
    </section>
  );
}