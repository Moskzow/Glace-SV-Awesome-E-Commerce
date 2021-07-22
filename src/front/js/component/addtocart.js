import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const AddToCart = () => {
	const { store, actions } = useContext(Context);
	console.log("cart 1", store.cart);
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="warning" align="end" id="dropdown-menu-align-right">
					<i className="fas fa-shopping-basket" /> {store.cart.length}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						{store.cart.length > 0 ? (
							store.cart.map((item, index) => {
								return (
									<li key={index}>
										<p href="#">{item}</p>
										<i
											id="delete"
											className="far fa-trash-alt pointer trash px-3"
											onClick={() => {
												actions.deleteFromCart({ index });
											}}
										/>
									</li>
								);
							})
						) : (
							<span>Vacío.</span>
						)}
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default AddToCart;
