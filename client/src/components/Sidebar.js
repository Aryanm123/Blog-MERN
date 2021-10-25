import { Link } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__element'>
				<h3 className="__settings">Setting</h3>
			</div>
			<div className='sidebar__element links'>
				<Link to='/updatePassword'>Change Password</Link>
			</div>
			<div className='sidebar__element links'>
				<Link to='/updateName'>Change Name</Link>
			</div>
		</div>
	);
};
export default Sidebar;
