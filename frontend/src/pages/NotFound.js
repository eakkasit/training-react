import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NotFound = () => {
    let navigation = useNavigate()

    const backToHome = () => {
        navigation(`/`);
    }
    return (
        <div class="d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 class="display-1 text-black">404 Page Not Found</h1>
            <Button variant="primary" type="button" onClick={backToHome}>Back to Home</Button>
        </div>
    )
}