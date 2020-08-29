import React from 'react';
import { Card, Button} from 'react-bootstrap';

const NewsCart = (props) => {
    const {urlToImage, url, description, title} = props.getNews;
    return (
        <Card style={{ width: '25rem', marginLeft: '500px', marginBottom: '10px'}}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button variant="primary" href={url}>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default NewsCart;