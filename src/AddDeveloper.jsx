import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Developer from './Developer';

function AddDeveloper() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [yearStarted, setYearStarted] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let newDev = new Developer(null,
            firstName,
            lastName,
            favoriteLanguage,
            yearStarted
        );
        fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDev),
        })
            .then(response => response.json())
            .then(() => {
                clearForm();
                navigate('/display-bio'); // Change this path to your Display Bio route
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const clearForm = () => {
        const form = document.getElementById('devForm');
        if (form) form.reset();
        setFirstName('');
        setLastName('');
        setFavoriteLanguage('');
        setYearStarted(null);
    }
    
    return (
        <div className="container">
            <h1> ADD Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage" className="form-control" onChange={(e) => setFavoriteLanguage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="number" data-testid="yearStarted" name="yearStarted" className="form-control" onChange={(e) => setYearStarted(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDeveloper