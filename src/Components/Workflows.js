import React from 'react'
import { Offcanvas } from 'react-bootstrap';
import {Link} from 'react-router-dom'
// styles
import styles from './Workflows.module.css'

export default function Workflows() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        

        <div>
            <Navbar>
                <Button>
                    Launch Workflows
                </Button>
            </Navbar>
        
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Welcome to Workflows!
                        <p>Please select a Workflow to begin.</p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>
            
            
        
        </div>
    ) 
}

export default Workflows;
