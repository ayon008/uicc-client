'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            // Show loading alert
            Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we submit your message.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Simulate a form submission delay
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log(data);

            // Handle success
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Your message has been sent successfully!',
                confirmButtonText: 'OK'
            });

            // Reset form fields
            reset();

        } catch (error) {
            // Handle error
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error submitting your message. Please try again.',
                confirmButtonText: 'Retry'
            });
        }
    };

    return (
        <div className="w-3/4 mx-auto mt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">First Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First name"
                        {...register("firstName", { required: "First name is required" })}
                        className="input input-bordered"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Last Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register("lastName", { required: "Last name is required" })}
                        className="input input-bordered"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Enter a valid email"
                            }
                        })}
                        className="input input-bordered"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Subject</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Write a subject"
                        {...register("subject", { required: "Subject is required" })}
                        className="input input-bordered"
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                </div>

                <div className="form-control col-span-2 mt-4">
                    <textarea
                        rows={3}
                        placeholder="Write your message"
                        {...register("message", { required: "Message is required" })}
                        className="textarea textarea-bordered textarea-lg"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div className="form-control mt-6 col-span-2">
                    <button type="submit" className="btn count text-xl font-bold text-white">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
