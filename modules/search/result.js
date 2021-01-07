import React from 'react';
import Image from 'next/image';

const Result = (props) => {
	const { result } = props;

	return (
		<a href={result.url} target="_blank">
			<div
				style={{
					background: 'white',
					borderRadius: '16px',
					padding: '12px',
					display: 'flex',
					marginBottom: '12px',
					width: '100%',
				}}
			>
				<div style={{ width: 'calc(100% - 57px)' }}>
					<div style={{ fontSize: '16px', lineHeight: '20px', color: '#8B8B8D' }}>
						{result.store}
					</div>
					<div
						style={{
							fontSize: '20px',
							lineHeight: '24px',
							color: 'black',
							fontWeight: 'bold',
							width: '100%',
						}}
					>
						{result.title}
					</div>
					<div style={{ fontSize: '12px', lineHeight: '18px', color: '#8B8B8D' }}>
						{result.description}
					</div>
					<div
						style={{
							marginTop: '8px',
							background: '#34C85A',
							display: 'inline-block',
							height: '20px',
							lineHeight: '20px',
							padding: '0 12px',
							borderRadius: '12px',
							color: 'white',
							fontSize: '12px',
						}}
					>
						{result.price}
					</div>
				</div>
				<div style={{ flexGrow: '1' }} />
				<div style={{ width: '64px', marginLeft: '12px' }}>
					<Image src={result.icon} height={90} width={64} />
				</div>
			</div>
		</a>
	);
};

export default Result;
