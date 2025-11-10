"use strict";

import Dob from './lib_dob.js';

class Contact {
    constructor(name = "", email = "", phone = "", zip = "", dobString = "") {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.zip = zip;
        this.dob = new Dob(dobString);
    }
    
    // Validation methods
    isEmailOrPhoneProvided() {
        return this.email.trim() !== "" || this.phone.trim() !== "";
    }
    
    isZipValid() {
        // Check if zip is exactly 5 digits
        const zipPattern = /^\d{5}$/;
        return zipPattern.test(this.zip);
    }
    
    isDobValid() {
        return this.dob.isValid() && this.dob.isInPast();
    }
    
    // Convert to/from JSON for session storage
    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            zip: this.zip,
            dobString: this.dob.isValid() ? this.dob.toISOString().split('T')[0] : ""
        };
    }
    
    static fromJSON(jsonData) {
        if (!jsonData) return null;
        const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
        return new Contact(data.name, data.email, data.phone, data.zip, data.dobString);
    }
}

export default Contact;