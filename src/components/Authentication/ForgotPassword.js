import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const { ForgotPassword } = useAuth()
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async(e)=>{
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await ForgotPassword(emailRef.current.value)
            setLoading(false)
            setMessage("Check your Email to reset your password")
        }
        catch{
            setLoading(false)
            setError("Account not registered")
        }

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={onSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-2" type="submit">Reset Password</Button>

                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                        
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
