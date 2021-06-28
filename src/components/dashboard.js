import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link} from 'react-router-dom'

export default function Dashboard() {

    const auth = useAuth()
    const history = useHistory()

    async function handleLogout(e){
        e.preventDefault()

        await auth.logout()
        history.push("/login")
    }
    
    return (
        <>
            <Card>
                {auth.currentUser.email}
            </Card>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            <div className="w-100 text-center mt-2">
                <Button varint="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}
