import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron>
            <h1>Breaking News....</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button className="btn-success">Learn more</Button>
            </p>
        </Jumbotron>
    );
};

export default Header;