import React from 'react' 

// Spinner
type SpinnerProps = {
    role: string
}

export const Spinner: React.FC<SpinnerProps> = ({ role }) => (
    <div className={`spinner-border ${role}`} role="status">
        <span className="sr-only"></span>
    </div>
)

// Alert
type AlertProps = {
    message: string;
    role: string;
}

export const Alert: React.FC<AlertProps> = ({ message, role }) => (
    <div className={`alert ${role}`} role="alert">
        { message }
    </div>
)