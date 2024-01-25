import React from 'react'
import { FaExclamation, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-flex flex-column justify-content-center align-items-center mt-5'>
			<FaExclamationTriangle className='text-danger' size={'5em'} />
			<Link to='/' className='btn btn-primary'> Sorry! This page does not exist.</Link>
		</div>
	)
}

export default NotFound;