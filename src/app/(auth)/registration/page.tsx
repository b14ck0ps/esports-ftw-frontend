'use client'
import { countries } from "@/data/country";
import { RegFormData } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";


type FormErrors = Record<keyof RegFormData, string>;

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


export default function SignupPage() {
    const router = useRouter()

    const [formData, setFormData] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const validateForm = () => {
        let valid = true;
        Object.values(formErrors).forEach((error) => {
            if (error.length > 0) {
                valid = false;
            }
        });
        return valid;
    };

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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post("https://localhost:7033/api/Player", {
                ...formData,
            });

            if (response.status === 201) {
                router.push('/login')
            }

        } catch (error) {

            if ((error as any).response.status === 400) {
                if ((error as any).response.data.Email) {
                    setFormErrors(prevErrors => ({
                        ...prevErrors,
                        email: (error as any).response.data.Email[0]
                    })) /* Error coming from server for unique email */
                }
            }
        }
    };

    return (
        <>
            <main className="flex flex-col items-center mt-10">
                <section className="text-center mb-10">
                    <span className="text-xl">Sign up to</span> <br />
                    <Link href="/">
                        <Image src="/esports-ftw.png" alt="bg" width={150} height={150} className="m-auto" />
                    </Link>
                </section>

                <form onSubmit={handleSubmit} className="w-80 md:w-full md:px-10 lg:w-[800px] ">
                    <section className="flex gap-3 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                id="name"
                                name="name"
                                className="input input-bordered w-full"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">IGN</span>
                            </label>
                            <input
                                type="text"
                                placeholder="eg. b14ck0ps"
                                id="username"
                                name="ign"
                                className="input input-bordered w-full"
                                value={formData.ign}
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="017777777777"
                                className="input input-bordered w-full"
                                value={formData.phone}
                                name="phone"
                                onChange={handleInputChange}
                            />
                            {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="someone@mail.com"
                                className="input input-bordered w-full"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                            />
                            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Select a country</span>
                            </label>
                            <select className="select select-primary w-full focus:outline-none"
                                id="countrySelect"
                                name="selectedCountry"
                                value={formData.selectedCountry || ''}
                                onChange={handleInputChange}
                            >
                                {Object.entries(countries).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))
                                }
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                type="text"
                                placeholder="eg. Tokyo"
                                name="city"
                                className="input input-bordered w-full"
                                value={formData.city}
                                id="city"
                                onChange={handleInputChange}
                            />
                            {formErrors.city && <p className="text-red-500">{formErrors.city}</p>}
                        </div>
                    </section>
                    <section className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Street</span>
                            </label>
                            <input
                                type="text"
                                name="street"
                                className="input input-bordered w-full"
                                value={formData.street}
                                id="street"
                                placeholder="eg. 1234 Main St"
                                onChange={handleInputChange}
                            />
                            {formErrors.street && <p className="text-red-500">{formErrors.street}</p>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Zip Code</span>
                            </label>
                            <input
                                type="text"
                                placeholder="eg. 1234"
                                id="zipCode"
                                name="zipCode"
                                className="input input-bordered w-full"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                            />
                            {formErrors.zipCode && <p className="text-red-500">{formErrors.zipCode}</p>}
                        </div>
                    </section>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input
                            type="date"
                            name="dob"
                            className="input input-bordered w-full"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="***********"
                            className="input input-bordered w-full"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="***********"
                            className="input input-bordered w-full"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
                    </div>

                    <button type="submit" className="w-full bg-white py-2 mt-8 rounded-lg text-black">
                        Sign up
                    </button>
                </form>

                <div className="text-xs my-3">
                    By signing up, you agree to our <span className="underline label-text">Terms</span> and{" "}
                    <span className="underline label-text">Privacy Policy</span>
                </div>

                <div className="mt-5">
                    Already have an account ?
                    <span className="underline label-text">
                        <Link href="/login"> Sign in </Link>
                    </span>
                </div>
            </main>
        </>
    );
}
