import React from 'react';
import './loader.scss';

export default function loader() {
	return(
		<>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
		</>
	);
}