import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../JS/Actions/user";

const NavBar = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const dispatch = useDispatch();
	return (
		<div>
			<Navbar bg='primary' data-bs-theme='dark'>
				<Container>
					<Navbar.Brand href='/'>Authentification</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						{isAuth ? (
							<Link to='/'>
								<button onClick={() => dispatch(logout())}>logout</button>
							</Link>
						) : (
							<div>
								<Nav.Link href='/register'>Register</Nav.Link>
								<Nav.Link href='/login'>Login</Nav.Link>
							</div>
						)}
						{isAuth ? <Nav.Link href='/profile'>Profile</Nav.Link> : null}
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
