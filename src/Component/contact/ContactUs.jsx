
import Form from 'react-bootstrap/Form';

const ContactUs = () => {
  return (
    <div>
      <h1>You Can Contact Us Here</h1>



      <div>
      <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="John Deo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="John Deo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
      </div>
    </div>


  )
}

export default ContactUs