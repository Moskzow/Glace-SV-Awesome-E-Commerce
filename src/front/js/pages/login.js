import React, { useState, useEffect, useContext } from "react";
import Register from "./register";
import ModalLogin from "../component/loginModal";
import "../../styles/login.scss";
import { Context } from "../store/appContext";
import {
	Carousel,
	Item,
	Caption,
	Card,
	Img,
	Title,
	Text,
	ImgOverlay,
	Button,
	Form,
	Group,
	Label,
	Control,
	Check,
	Tab,
	Row,
	Col,
	Nav,
	Modal
} from "react-bootstrap";

export const Login = () => {
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Loged = () => {
		actions.login(email, password);
	};

	return (
		<div className="loginbckgrndimg">
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<div className="row rowdesign1">
					<Nav variant="pills" className="mt-3 mb-3 mx-auto">
						<Nav.Item className="col-lg-6 col-6 mx-auto text-center">
							<Nav.Link eventKey="first" variant="warning">
								Accede
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="col-lg-6 col-6 mx-auto text-center">
							<Nav.Link eventKey="second">Registrate</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
				<div className="row rowdesign2">
					<Tab.Content className="col-lg-6 col-12 mx-auto">
						<Tab.Pane eventKey="first">
							<Form className="formcolor">
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email"
										required
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										placeholder="Contraseña"
										required
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>
								<Button variant="warning" onClick={Loged} onChange={ModalLogin}>
									Acceder
								</Button>
							</Form>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<Form className="formcolor">
								<Register />
							</Form>
						</Tab.Pane>
					</Tab.Content>
				</div>
			</Tab.Container>
		</div>
	);
};
