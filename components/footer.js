class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #f9fafb;
                    border-top: 1px solid #e5e7eb;
                }
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                }
                .footer-logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #111827;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #4f46e5;
                }
                .footer-disclaimer {
                    font-size: 0.875rem;
                    color: #6b7280;
                    margin-top: 1rem;
                    line-height: 1.5;
                }
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .footer-links-title {
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 0.5rem;
                }
                .footer-link {
                    color: #6b7280;
                    text-decoration: none;
                    font-size: 0.875rem;
                }
                .footer-link:hover {
                    color: #4f46e5;
                }
                .footer-bottom {
                    border-top: 1px solid #e5e7eb;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .footer-age {
                    background-color: #e5e7eb;
                    color: #4b5563;
                    font-size: 0.75rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.375rem;
                    display: flex;
                    align-items: center;
                }
                .footer-age-icon {
                    margin-right: 0.25rem;
                }
                .footer-copyright {
                    font-size: 0.75rem;
                    color: #6b7280;
                    text-align: center;
                }
                @media (min-width: 640px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-grid">
                    <div>
                        <div class="footer-logo">
                            <i data-feather="shield" class="footer-logo-icon w-5 h-5"></i>
                            Mindful Wager
                        </div>
                        <p class="text-gray-600 text-sm">
                            Providing transparent, educational resources for responsible gambling since 2023.
                        </p>
                        <p class="footer-disclaimer">
                            Gambling involves risk. We are not responsible for losses. Please play responsibly.
                        </p>
                    </div>
                    
                    <div>
                        <h3 class="footer-links-title">Navigation</h3>
                        <div class="footer-links">
                            <a href="index.html" class="footer-link">Home</a>
                            <a href="platforms.html" class="footer-link">Platform Reviews</a>
                            <a href="play-safe.html" class="footer-link">Play Safe Guide</a>
                            <a href="help.html" class="footer-link">Help Resources</a>
                            <a href="about.html" class="footer-link">About Us</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-links-title">Resources</h3>
                        <div class="footer-links">
                            <a href="help.html#self-assessment" class="footer-link">Gambling Addiction Test</a>
                            <a href="self-exclusion-tools.html" class="footer-link">Self-Exclusion Tools</a>
                            <a href="deposit-limit-guide.html" target="_blank" rel="noopener noreferrer" class="footer-link">Deposit Limit Guide</a>
                            <a href="odds-calculator.html" target="_blank" rel="noopener noreferrer" class="footer-link">Odds Calculator</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-links-title">Legal</h3>
                        <div class="footer-links">
                            <a href="terms-of-service.html" target="_blank" rel="noopener noreferrer" class="footer-link" >Terms of Service</a>
                            <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
                            <a href="affiliate-disclosure.html" class="footer-link">Affiliate Disclosure</a>
                            <a href="cookie-policy.html" class="footer-link">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-age">
                        <i data-feather="alert-circle" class="footer-age-icon w-3 h-3"></i>
                        18+ Only. Gambling is not legal in all jurisdictions.
                    </div>
                    <div class="footer-copyright">
                        &copy; 2023 Mindful Wager Academy. All rights reserved.
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);