import React from "react";
import "../styles/logout.scss";

const Logout = () => {
	return (
		<div className="logout">
			<p>
				Log out
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.6875 22.0312V15.9375H11.1914C10.9428 15.9375 10.7043 15.8387 10.5285 15.6629C10.3527 15.4871 10.2539 15.2486 10.2539 15C10.2539 14.7514 10.3527 14.5129 10.5285 14.3371C10.7043 14.1613 10.9428 14.0625 11.1914 14.0625H19.6875V7.96875C19.6866 7.09879 19.3406 6.26474 18.7254 5.64958C18.1103 5.03443 17.2762 4.68843 16.4062 4.6875H5.15625C4.28629 4.68843 3.45224 5.03443 2.83708 5.64958C2.22193 6.26474 1.87593 7.09879 1.875 7.96875V22.0312C1.87593 22.9012 2.22193 23.7353 2.83708 24.3504C3.45224 24.9656 4.28629 25.3116 5.15625 25.3125H16.4062C17.2762 25.3116 18.1103 24.9656 18.7254 24.3504C19.3406 23.7353 19.6866 22.9012 19.6875 22.0312ZM24.924 15.9375L21.8373 19.0248C21.6689 19.2021 21.5764 19.4381 21.5795 19.6825C21.5827 19.927 21.6812 20.1606 21.8541 20.3334C22.0269 20.5063 22.2605 20.6048 22.505 20.608C22.7494 20.6111 22.9854 20.5186 23.1627 20.3502L27.8502 15.6627C28.0259 15.4869 28.1246 15.2485 28.1246 15C28.1246 14.7515 28.0259 14.5131 27.8502 14.3373L23.1627 9.64981C22.9854 9.48141 22.7494 9.38892 22.505 9.39205C22.2605 9.39518 22.0269 9.49368 21.8541 9.66656C21.6812 9.83944 21.5827 10.073 21.5795 10.3175C21.5764 10.5619 21.6689 10.7979 21.8373 10.9752L24.924 14.0625H19.6875V15.9375H24.924Z"
						fill="#3D9382"
					/>
				</svg>
			</p>
		</div>
	);
};
export default Logout;