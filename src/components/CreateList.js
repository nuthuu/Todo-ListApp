import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


const CreateList = () => {

    const [inputValue, setInputValue] = useState({
        subject: '',
        date: '',
        list: ''
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
    setInputValue((prev)=> {
        return {...prev, [name]: value}
    });
    }

    return(
        <div>
            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control name="subject" type="text" value={inputValue.subject} onChange={handleChange} placeholder="Enter Subject"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control name="date" type="date" value={inputValue.date} onChange={handleChange} placeholder="Enter Subject"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>List:</Form.Label>
                    <Form.Control as="textarea" name="list" type="text" value={inputValue.list} onChange={handleChange} rows={3}></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Save List</Button>
                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
}

export default CreateList;