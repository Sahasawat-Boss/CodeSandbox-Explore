//react-hook-form only
import React from "react";
import { useForm } from "react-hook-form";

const HF = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
            />
            {errors.name && <p>{errors.name?.message as string}</p>
            }

            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format"
                    }
                })}
                placeholder="Enter your email"
            />
            {errors.email && <p>{errors.name?.message as string}</p>
            }

            <button type="submit">Submit</button>
        </form>
    );
};

export default HF;
