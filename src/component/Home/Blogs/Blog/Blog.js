import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { bTitle, bDate, bDescription, bComment, bThumbnail
    } = blog;
    return (
        <div className="text-start">
            <Col>
                <Card className="pb-2">
                    <Card.Img className="hover-zoom" variant="top" src={bThumbnail} />
                    <Card.Body>
                        <Card.Title className="text-success fw-bold fs-4">{bTitle.slice(0, 50)}</Card.Title>
                        <div className="d-flex justify-content-between">
                            <p className="text-secondary fs-6"> {bDate}</p>
                            <p className="text-secondary fs-6"> {bComment} Comments</p>
                        </div>
                        <Card.Text>
                            {bDescription.slice(0, 150)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Blog;