/**
 * Form Handler for VITA Studio Diagnostic Form
 * Handles form submission, validation, and lead storage
 */

class FormHandler {
    constructor() {
        this.formElement = document.getElementById('diagnostic-form');
        this.init();
    }

    init() {
        if (this.formElement) {
            this.formElement.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // Gather form data from all fields
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            businessType: document.getElementById('business-type').value,
            monthlyRevenue: document.getElementById('monthly-revenue').value,
            mainChallenge: document.getElementById('main-challenge').value,
            timeline: document.getElementById('timeline').value,
            timestamp: new Date().toISOString()
        };

        // Validate required fields
        if (!this.validateForm(formData)) {
            console.error('Form validation failed');
            return;
        }

        // Save to localStorage
        this.saveLead(formData);

        // Log the lead to console
        console.log('Lead captured:', formData);

        // Redirect to thank you page
        this.redirect();
    }

    validateForm(data) {
        // Basic validation for required fields
        const requiredFields = ['name', 'email', 'businessType', 'monthlyRevenue', 'mainChallenge', 'timeline'];

        for (const field of requiredFields) {
            if (!data[field]) {
                console.error(`Missing required field: ${field}`);
                return false;
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            console.error('Invalid email format');
            return false;
        }

        return true;
    }

    saveLead(lead) {
        try {
            // Get existing leads from localStorage or initialize empty array
            let leads = localStorage.getItem('vita_leads');
            leads = leads ? JSON.parse(leads) : [];

            // Add new lead to array
            leads.push(lead);

            // Save back to localStorage
            localStorage.setItem('vita_leads', JSON.stringify(leads));
        } catch (error) {
            console.error('Error saving lead to localStorage:', error);
        }
    }

    redirect() {
        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    }
}

// Initialize form handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});
