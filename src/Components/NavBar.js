import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import loginUser from  '../image/user.svg';



const NavBarStyle = styled.header`
	display: flex;
	background: #299B01;
	justify-content: space-between;
	height: 80px;
	
`;
const Logo = styled.div`
	 display:flex;
	 align-items: center;
	 color:#fff;
`;
const UserImg = styled.img`
	width: 32px;
`;
const ImgLogo = styled.img`
	width: 50px;
	margin-right: 5px;
`;
const Login = styled.button`
	background-color: transparent;
	color: #fff;
	font-size: 16px;
	`;

//выводим на страницу
export const NavBar = () => (
	<NavBarStyle>
		<Logo className='logo'>
			<ImgLogo src={logoImg} alt="logo" />
			<h1>Restarant</h1>
		</Logo>
		<Login>
			<UserImg src={loginUser} alt="logo" />
			<p></p>
			<p>Войти</p>
		</Login>
	</NavBarStyle>
)