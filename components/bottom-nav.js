class CustomBottomNav extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 40;
                    background-color: white;
                    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
                }
                .bottom-nav-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 0.5rem 0;
                    background-color: #ffffff;
                    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
                }
                .nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: #6b7280;
                    font-size: 0.75rem;
                    flex: 1;
                    transition: color 0.3s ease;
                }
                .nav-item:hover {
                    color: #000000; /* Dark black on hover */
                }
                .nav-item.active {
                    color: #000000; /* Dark black for active page */
                    font-weight: 600;
                }
                .nav-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-bottom: 0.25rem;
                    stroke-width: 2;
                }
                @media (max-width: 767px) {
                    :host {
                        display: block;
                    }
                }
            </style>
            <div class="bottom-nav-container">
                <a href="index.html" class="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3l8 6v12H4V9l8-6zm0 2.3L6 9v10h12V9l-6-3.7z" />
                    </svg>
                    
                </a>
                <a href="platforms.html" class="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    </svg>
                    
                </a>
                <a href="play-safe.html" class="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3zm-1 13l-3-3 1.4-1.4L11 12.2l3.6-3.6L16 10l-5 5z"/>
</svg>

                    
                </a>
                <a href="help.html" class="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8zm-1-5h2v2h-2zm1-10c-2.2 0-4 1.6-4 3.5h2c0-.8.9-1.5 2-1.5s2 .7 2 1.5c0 .9-.6 1.3-1.5 1.9-.9.6-1.5 1.3-1.5 2.6h2c0-.6.4-1 .9-1.4 1-.7 2.1-1.6 2.1-3.1C16 6.6 14.2 5 12 5z"/>
</svg>

                    
                </a>
                <a href="about.html" class="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"/>
</svg>

                    
                </a>
            </div>
        `;
    }
}
customElements.define('custom-bottom-nav', CustomBottomNav);