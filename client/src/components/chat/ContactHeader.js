import React from "react";
import Avatar from "components/Avatar";
import { Col, Row } from "reactstrap";

const ContactHeader = (props) => (
    <Row className="heading">
        <Col xs="auto">
            <Avatar src={props.user.avatar} />
        </Col>
        <Col>
            <div>جهات الاتصال</div>
        </Col>
        <Col xs="2">
            <div className="mr-auto nav-link" onClick={props.toggle}>
                <i className="fa fa-bars" />
            </div>
        </Col>

        
    </Row>
);

export default ContactHeader;