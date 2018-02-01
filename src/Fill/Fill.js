import React from 'react';
const fill = (props) => {
	return (
		<div className="col-md-12 col-lg-12">
			<div className="col-md-6 col-lg-6 col-md-push-3 col-lg-push-3">
				<span className="fill_radio">All </span>
				<input type="radio" name="fillter"  onClick={ props.fillByAll }/>
				<span className="fill_radio">Done </span> 
				<input type="radio" name="fillter" className="fill_radio" onClick={ props.fillByDone }/>
				<span className="fill_radio">Action </span> 
				<input type="radio" name="fillter" className="fill_radio" onClick={ props.fillByAction }/>
			</div>
		</div>
	);
};

export default fill;