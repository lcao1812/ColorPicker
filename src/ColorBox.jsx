import React, { useState, useEffect } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ background, name }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => setCopied(false), 1500);
	}, [copied]);

	return (
		<CopyToClipboard text={background} onCopy={() => setCopied(true)}>
			<div style={{ background }} className="ColorBox">
				<div style={{ background }} className={`copy-overlay ${copied && 'show'}`}></div>
				<div className={`copy-msg ${copied && 'show'}`}>
					<h1>Copied</h1>
					<p>{background}</p>
				</div>
				<div className="copy-container"></div>
				<div className="box-content">
					<span>{name}</span>
				</div>
				<button className="copy-button">Copy</button>
				<span className="see-more">More</span>
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;
