function renderFooter() {
    const footerHTML = `
        <footer style="background:#1a1a2e; color:#ccc; padding:30px 48px; margin:0; text-align:center; font-size:13px;">
            <p>&copy; 2026 My Shop. All rights reserved.</p>
            <p style="margin-top:6px;">Built with Spring Boot, MySQL & vanilla JavaScript.</p>
        </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

renderFooter();