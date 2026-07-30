import { Button, Form } from "react-bootstrap";
import "./PostStudent.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostStudent = () => {
    const [ formData, setFormData ] = useState({
        studentName: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        
        try {
            const response = await fetch("http://10.200.1.63:8080/addPerson", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Student added successfully:", data);
            navigate("/");
        } catch (error) {
            console.error("Error adding student:", error);
        }
    }
    return (
        <div className="center-form">
            <h1>Student Information</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formStudentName">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="studentName"
                        placeholder="Enter student name"
                        value={formData.studentName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default PostStudent;