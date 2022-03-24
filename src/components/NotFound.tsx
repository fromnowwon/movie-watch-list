import React from 'react'

export const NotFound = (): JSX.Element => {
	return (
		<div 
			className="not-found-page"
			style={{
				textAlign: "center"
			}}
		>
			<p
				style={{
					fontSize: "2rem",
					color: "#fff"
				}}		
			>404 Not Found</p>
		</div>
	)
}
