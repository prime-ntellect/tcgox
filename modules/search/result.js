import React from 'react';
import Image from 'next/image';

const Result = (props) => {
	const { result } = props;

	return (
		<a href={result.url} target="_blank">
			<div
				style={{
					padding: '12px',
					display: 'flex',
					borderBottom: '1px solid rgba(0, 0, 0, .1)',
					width: '100%',
				}}
			>
				<Image src={result.icon} height={64} width={45} />
				<div style={{ marginLeft: '12px', display: 'flex', width: '100%' }}>
					<div>
						<div>{result.title}</div>
						<div>{result.condition}</div>
						<a style={{ color: 'blue' }} href={result.storeUrl} target="_blank">
							{result.store}
						</a>
					</div>
					<div style={{ flexGrow: '1' }} />
					<div>{result.price}</div>
				</div>
			</div>
		</a>
	);
};

export default Result;
