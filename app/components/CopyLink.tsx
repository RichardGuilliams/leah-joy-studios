"use client";

import { useEffect, useState } from "react";

export default function CopyLink() {
	const [pageUrl, setPageUrl] = useState("");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setPageUrl(window.location.href);
	}, []);

	async function copyUrl() {
		await navigator.clipboard.writeText(pageUrl);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	return (
		<div className="copy-link">
			<input
				type="text"
				value={pageUrl}
				readOnly
			/>

			<button onClick={copyUrl}>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
}
