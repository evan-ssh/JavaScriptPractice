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

    isNameValid() {
        return this.name.trim() !== "";
    }

    isEmailOrPhoneValid() {
        return this.email.trim() !== "" || this.phone.trim() !== "";
    }
    
    isZipValid() {
        const zipPattern = /^\d{5}$/;
        return zipPattern.test(this.zip);
    }
    
    isDobValid() {
        return this.dob.isValid() && this.dob.isInPast();
    }
    
    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            zip: this.zip,
            dobString: this.dob.toInputString()
        };
    }
    
}

export default Contact;