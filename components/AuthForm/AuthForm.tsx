'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "../CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "../PlaidLink";


const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = authFormSchema(type);
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            if (type === 'sign-up') {
                //because all fields are required in dwolla
                const userData = {
                    firstName: values.firstName!,
                    lastName: values.lastName!,
                    address1: values.address1!,
                    city: values.city!,
                    state: values.state!,
                    postalCode: values.postalCode!,
                    dateOfBirth: values.dateOfBirth!,
                    ssn: values.ssn!,
                    email: values.email,
                    password: values.password
                  }
                const newUser = await signUp(userData);
                setUser(newUser);
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: values.email,
                    password: values.password
                });
                if (response) {
                    setTimeout(() => router.push('/'), 100);
                } 
            }
        } catch(err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link
                    href="/"
                    className='mb-12 cursor-pointer items-center gap-2 flex'
                >
                    <Image
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon image'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user ? 'Link Account' :
                            type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        <p className="text-16 font-normal text-gray-600">
                            {user
                                ? 'Link your account'
                                : 'Please enter your details'}
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    <PlaidLink user={user} variant="primary"/>
                </div>
            ) :
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="firstName"
                                            type="text"
                                            label="First Name"
                                            placeholder="ex: John"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="lastName"
                                            type="text"
                                            label="Last Name"
                                            placeholder="ex: Doe"
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name="address1"
                                        type="text"
                                        label="Address"
                                        placeholder="Enter your specific address"
                                    />
                                    <CustomInput
                                        control={form.control}
                                        name="city"
                                        type="text"
                                        label="City"
                                        placeholder="Enter your city"
                                    />
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="state"
                                            type="text"
                                            label="State"
                                            placeholder="ex: NY"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="postalCode"
                                            type="text"
                                            label="Postal Code"
                                            placeholder="ex: 11101"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="dateOfBirth"
                                            type="date"
                                            label="Date of Birth"
                                            placeholder="YYYY-MM-DD"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="ssn"
                                            type="text"
                                            label="SSN"
                                            placeholder="ex: 1234"
                                        />
                                    </div>
                                </>
                            )}
                            <CustomInput
                                control={form.control}
                                name="email"
                                type="text"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <CustomInput
                                control={form.control}
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                            />
                            <div className="flex flex-col gap-4">
                                <Button type="submit" className="form-btn" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            &nbsp; Loading...
                                        </>
                                    ) : type === 'sign-in' ? 'Sign in' : 'Sign Up'}
                                </Button>
                            </div>

                        </form>
                    </Form>
                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">
                            {type === 'sign-in'
                                ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link
                            href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                            className="form-link"
                        >
                            {type === 'sign-in' ? 'Sign up' : 'Sign In'}
                        </Link>
                    </footer>
                </>
            }
        </section>
    )
}

export default AuthForm