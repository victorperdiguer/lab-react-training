import { useState } from "react";

function SignupPage() {
    const initialState = {
        email: '',
        password: '',
        nationality: ''
    }
    const [signup, setSignup] = useState(initialState);
    const [confirmation, setConfirmation] = useState(false);
    const handleText = (e) => {
        setSignup(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(initialState);
        setConfirmation(true);
    }

    return ( 
        <div className="singup-form">
            <form onSubmit={handleSubmit} className="signup-form-form">
                <label>Email</label>
                <input type="text" name="email" value={signup.email} onChange={handleText}/>
                <label>Password</label>
                <input type="password" name="password" value={signup.password} onChange={handleText} />
                {/* very illegal way of handling passwords btw */}
                <select name="nationality" value={signup.nationality} onChange={handleText}>
                    <option value="en">England</option>
                    <option value="de">Deuchland</option>
                    <option value="fr">France</option>
                </select>
                <button type="submit">Sign up</button>
            </form>
            <div>{confirmation && 'Signup correct'}</div>
        </div>
     );
}

export default SignupPage;