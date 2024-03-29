import React from "react";
import Auth from "Auth";
import Avatar from "components/Avatar";
import { Row, Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown } from "reactstrap";
import moment from "moment";

const ChatHeader = (props) => {
    const logout = () => {
        Auth.logout();
        window.location.replace('/');
    };

    const status = () => {
        if(props.typing) return 'يكتب الآن';
        if(props.contact.status === true) return 'متصل الآن';
        if(props.contact.status) return moment(props.contact.status).fromNow();
    }

    return (
        <Row className="heading m-0">
            <Col xs="auto" onClick={props.toggle}>
                <Avatar src={props.contact.avatar} />
            </Col>
            <Col>
                <div className="text-right">
                    <div>{props.contact ? props.contact.name : ''}</div>
                    <small>{status()}</small>
                </div>
            </Col>
            <Col xs="auto">
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="nav-link">
                            <i className="fa fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={e => window.location.replace('/password')}>تغيير كلمة المرور</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={logout}>تسجيل الخروج</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Col>
        </Row>
    )
}

export default ChatHeader;