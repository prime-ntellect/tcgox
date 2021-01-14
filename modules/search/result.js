import React from 'react';
import Image from 'next/image';

const Result = (props) => {
	const { result } = props;

	const isElectron = React.useMemo(() => {
		var userAgent = navigator.userAgent.toLowerCase();
		return !(userAgent.indexOf(' electron/') == -1);
	}, []);

	const handleClick = React.useCallback(() => {
		window.postMessage(result.url);
	}, [result]);

	const renderBody = React.useCallback(() => {
		return (
			<div
				style={{
					background: 'white',
					borderRadius: '16px',
					padding: '24px',
					display: 'flex',
					marginBottom: '12px',
					width: '100%',
				}}
			>
				<div style={{ width: 'calc(100% - 57px)' }}>
					<div
						style={{ fontSize: '20px', lineHeight: '24px', color: '#8A8A8E', fontWeight: '400' }}
					>
						{result.store}
					</div>
					<div
						style={{
							fontSize: '22px',
							lineHeight: '28px',
							color: 'black',
							fontWeight: 'bold',
							marginTop: '4px',
							width: '100%',
						}}
					>
						{result.title}
					</div>
					<div style={{ fontSize: '17px', lineHeight: '21px', color: '#3C3C43', marginTop: '8px' }}>
						{result.description}
					</div>
					<div
						style={{
							marginTop: '12px',
							background: '#34C759',
							display: 'inline-block',
							height: '25px',
							lineHeight: '25px',
							padding: '0 16px',
							borderRadius: '12px',
							color: 'white',
							fontSize: '14px',
							fontWeight: 'bold',
						}}
					>
						{result.price}
					</div>
					<div
						style={{
							marginTop: '12px',
							background: '#34C759',
							display: 'inline-block',
							height: '25px',
							lineHeight: '25px',
							padding: '0 16px',
							borderRadius: '12px',
							color: 'white',
							fontSize: '14px',
							fontWeight: 'bold',
							marginLeft: '12px',
						}}
					>
						{result.bsvPrice} BSV
					</div>
				</div>
				<div style={{ flexGrow: '1' }} />
				<div style={{ width: '86px', marginLeft: '12px' }}>
					<Image src={result.icon} height={122} width={86} />
				</div>
			</div>
		);
	}, [result]);

	if (isElectron) {
		return (
			<div style={{ cursor: 'pointer' }} onClick={handleClick}>
				{renderBody()}
			</div>
		);
	}

	return (
		<a href={result.url} target="_blank">
			{renderBody()}
		</a>
	);
};

export default Result;
