import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import './Banner.css'
import { useHistory } from 'react-router-dom';
const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory()
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <DatePicker/>
                }
                <Button
                onClick={() => setShowSearch(!showSearch)}
                className="banner_searchButton"
                variant="outlined"
                >{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner_info">
                <h1>Get and search your imagations</h1>
                <h5> Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={()=>history.push('/search')}
                 variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    );
};

export default Banner;