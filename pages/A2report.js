import React, { useEffect, useRef } from 'react';
import NavBar from '../components/nav.js'

export default function Report() {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		let PSPDFKit;

		(async function () {
			PSPDFKit = await import('pspdfkit');

			if (PSPDFKit) {
				PSPDFKit.unload(container);
			}

			await PSPDFKit.load({
				container,
				document: '/A2Report.pdf',
				baseUrl: `${window.location.protocol}//${window.location.host}/`,
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

	return (
        <>
            <NavBar></NavBar>
            <div ref={containerRef} style={{ height: '100vh' }} />
        </>
    )
}
