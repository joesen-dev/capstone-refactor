import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
import Logo from '../../assets/images/Capstone-logo60.png';

function Nav() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				// Nav Items
				<HStack as="nav" spacing="5">
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/workouts">Workouts</Link>
					<Link to="/profile">Profile</Link>
					<Button>
						<Link to="/" onClick={() => Auth.logout()}>
							Logout
						</Link>
					</Button>
				</HStack>
			);
		} else {
			return (
				// Call to action items
				<HStack>
					<Button>
						<Link to="/signup">Signup</Link>
					</Button>
					<Button>
						<Link to="/login">Login</Link>
					</Button>
				</HStack>
			);
		}
	}

	return (
		<chakra.header id="header">
			<Flex w="100%" px="6" py="5" align="center" justify="space-between">
				{/* // Logo */}
				<Link to="/">
					<HStack direction="row">
						<Image src={Logo} h="40px" />
						<span>Capstone</span>
					</HStack>
				</Link>
				{showNavigation()}
			</Flex>
		</chakra.header>
	);
}

export default Nav;
