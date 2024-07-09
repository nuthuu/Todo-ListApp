import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'; 

//defining of component.
const CreateList = () => {

    const [inputValue, setInputValue] = useState({
        subject: '',
        date: '',
        details: ''
    });
//function to change the input.
    const handleChange = (e) => {
        const {name,value} = e.target;
    setInputValue((prev)=> {
        return {...prev, [name]: value}
     });
    }
//function to handle the submit of the form.
const handleSubmit = (e) => {
    //prevent default behaviour
    e.preventDefault();

    //check for input validation
    if (!inputValue.subject || !inputValue.date || !inputValue.details) {
        toast.error('please fill up the fields', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        })
        return;
    }

    //add the logic for the functionality
    axios.post('http://localhost:4000/todos', inputValue)
    .then(res=> {
        //show popup message
        toast.success("Todo added successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,   
        });
        //reset the form to empty
        setInputValue({subject: '', date: '', details: ''})
    })
    //catch the error
    .catch(err=>{
        toast.error("Error occurred while adding the todo", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        })
    })

}

//form input
    return(
        <div>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control name="subject" type="text" value={inputValue.subject} onChange={handleChange} placeholder="Enter Subject"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control name="date" type="date" value={inputValue.date} onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Details:</Form.Label>
                    <Form.Control as="textarea" name="details" type="text" value={inputValue.details} onChange={handleChange} rows={5}></Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">Save List</Button>
                <ToastContainer/>

            </Form>
        </div>
    );
}
//export component
export default CreateList;