import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { updateEmail, updatePassword, currentUser } = useAuth()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = async(e)=>{
        e.preventDefault()
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            console.log("Incorrect")
            return setError("Passwords do not match")
        }
        
        setLoading(true)

        const promises = [];
        setError("-" + currentUser.email)

        if(currentUser.email !== emailRef.current.value){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            setError("")
            history.push("/")
        }).catch(
            setError("t")
        ).finally(
        )

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={onSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} />
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-2" type="submit">Update Profile</Button>
                        
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Create an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
