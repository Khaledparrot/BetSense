class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: white;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .header-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #111827;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                .logo-icon {
                    margin-right: 0.5rem;
                    color: #4f46e5;
                }
                .nav-desktop {
                    display: none;
                }
                .nav-mobile-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 0.375rem;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
                .nav-mobile-button:hover {
                    background-color: #f3f4f6;
                }
                .age-badge {
                    background-color: #f3f4f6;
                    color: #6b7280;
                    font-size: 0.75rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.375rem;
                    display: flex;
                    align-items: center;
                }
                .age-icon {
                    margin-right: 0.25rem;
                }
                /* Enhanced styles for nav-desktop */
                .nav-desktop a {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #374151;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                .nav-desktop a:hover {
                    background-color: #f3f4f6;
                    color: #1f2937;
                }

                .nav-desktop a.active {
                    background-color: #e0e7ff;
                    color: #3730a3;
                    font-weight: 600;
                }

                .nav-desktop .age-badge {
                    background-color: #e5e7eb;
                    color: #6b7280;
                    font-size: 0.875rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                @media (min-width: 768px) {
                    .nav-desktop {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                    }
                    .nav-mobile-button {
                        display: none;
                    }
                }
            </style>
            <div class="header-container">
                <a href="index.html" class="logo">
                    <img src="ps.jfif" alt="Parisur Logo" class="logo-icon">
                    Parisur
                </a>
                
                <div class="nav-desktop">
                    <a href="index.html" class="text-gray-700 hover:text-gray-900 font-medium">Home</a>
                    <a href="platforms.html" class="text-gray-700 hover:text-gray-900 font-medium">Platforms</a>
                    <a href="play-safe.html" class="text-gray-700 hover:text-gray-900 font-medium">Play Safe</a>
                    <a href="help.html" class="text-gray-700 hover:text-gray-900 font-medium">Help</a>
                    <a href="about.html" class="text-gray-700 hover:text-gray-900 font-medium">About</a>
                    <div class="age-badge">
                        <i data-feather="alert-circle" class="age-icon w-3 h-3"></i>
                        18+ Only
                    </div>
                </div>
                
                <button class="nav-mobile-button md:hidden">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </div>
        `;
    }
}
customElements.define('custom-header', CustomHeader);
