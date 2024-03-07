import React from "react";
import Avatar from "components/Avatar";
import moment from "moment";
import { Col, Badge } from "reactstrap";

const Contact = (props) => (
    <div className="contact">
        <Col xs="2">
            <div>
                <Avatar src={props.contact.avatar} />
                {props.contact.status ===  true ? <i className='fa fa-circle online' /> : ''}
            </div>
        </Col>
        <Col>
            <div className="w-50">
                <div className="name">{props.contact.name}</div>
                <div className="small last-message">
                    {props.message ? props.message.content : 'انقر هنا لبدء المحادثة'}
                </div>
            </div>
        </Col>
        <Col xs="auto">
            <div className="flex-grow-1 text-left">
                <div className="small text-muted">
                    {props.message ? moment(props.message.date).format("hh:mm a") : ''}
                </div>
                {props.unseen > 0 ? <Badge color="success">{props.unseen}</Badge> : ''}
            </div>
        </Col>
    </div>
);

export default Contact;