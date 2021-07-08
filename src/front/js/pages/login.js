import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
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
	Nav
} from "react-bootstrap";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

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
									<Form.Control type="email" placeholder="Email" required />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Contraseña" required />
								</Form.Group>
								<Button variant="warning" type="submit">
									Acceder
								</Button>
							</Form>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<Form className="formcolor">
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Nombre</Form.Label>
									<Form.Control type="text" placeholder="Nombre" required />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Email" required />
									<Form.Text>
										Se enviará una contraseña a tu dirección de correo electrónico.
									</Form.Text>
									<Form.Text>
										Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
										experiencia en esta web, gestionar el acceso a tu cuenta y otros propósitos.
									</Form.Text>
								</Form.Group>
								<Button variant="warning" type="submit">
									Registrarme
								</Button>
							</Form>
						</Tab.Pane>
					</Tab.Content>
				</div>
			</Tab.Container>
		</div>
	);
};

Login.propTypes = {
	match: PropTypes.object
};