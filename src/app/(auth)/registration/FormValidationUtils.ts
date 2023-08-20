import { RegFormData } from '@/types';
import React from 'react';

interface FormErrors {
    [key: string]: string;
}

const initialFormState: RegFormData = {
    email: "",
    name: "",
    ign: "",
    dob: "",
    password: "",
    confirmPassword: "",
    selectedCountry: null,
    city: "",
    street: "",
    zipCode: "",
    phone: "",
};

const initialFormErrors: FormErrors = {
    email: "",
    name: "",
    ign: "",
    dob: "",
    password: "",
    confirmPassword: "",
    selectedCountry: "",
    city: "",
    street: "",
    zipCode: "",
    phone: "",
};

interface ValidationProps {
    formData: RegFormData;
    setFormData: React.Dispatch<React.SetStateAction<RegFormData>>;
    formErrors: FormErrors;
    setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const useFormValidation = (): ValidationProps => {
    const [formData, setFormData] = React.useState<RegFormData>(initialFormState);
    const [formErrors, setFormErrors] = React.useState<FormErrors>(initialFormErrors);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate and update formErrors based on changes
        switch (name) {
            case "email":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "Email is required",
                    }));
                }
                else if (!value.includes("@")) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "Invalid email",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "",
                    }));
                }
                break;
            case "name":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        name: "Name is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        name: "",
                    }));
                }
                break;
            case "ign":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ign: "IGN is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ign: "",
                    }));
                }
                break;
            case "dob":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        dob: "Date of birth is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        dob: "",
                    }));
                }
                break;
            case "password":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "Password is required",
                    }));
                }
                else if (value.length < 6) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "Password must be at least 6 characters",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "",
                    }));
                }
                break;
            case "confirmPassword":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: "Confirm password is required",
                    }));
                }
                else if (value !== formData.password) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: "Password does not match",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: "",
                    }));
                }
                break;
            case "selectedCountry":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        selectedCountry: "Country is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        selectedCountry: "",
                    }));
                }
                break;
            case "city":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        city: "City is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        city: "",
                    }));
                }
                break;
            case "street":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        street: "Street is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        street: "",
                    }));
                }
                break;
            case "zipCode":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        zipCode: "Zip code is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        zipCode: "",
                    }));
                }
                break;
            case "phone":
                if (!value) {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        phone: "Phone is required",
                    }));
                }
                else {
                    setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        phone: "",
                    }));
                }
                break;
        }

    };

    return {
        formData,
        setFormData,
        formErrors,
        setFormErrors,
        handleInputChange,
    };
};
