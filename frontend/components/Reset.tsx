import useForm from "../lib/useForm";
import { refetchUserQuery, useResetPasswordMutation } from "../types/generated-queries";
import { Form } from "./styles/FormStyles";
import DisplayError from "./ErrorMessage";
import Link from "next/link";
import SignIn from "./SignIn";
import PasswordResetRequest from "./PasswordResetRequest";

export default function Reset({token}: {token: string}) {
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
    password: ''
  });

  const [signUpMutation, {data, loading}] = useResetPasswordMutation()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO - add errors to form fields
    if (!inputs.email || !inputs.password ) return;

    const res = await signUpMutation({
      variables: {
        email: inputs.email,
        password: inputs.password,
        token
      }
    })
    resetForm()

    console.log(res?.data);
  }

  const error = data?.redeemUserPasswordResetToken?.code ? data?.redeemUserPasswordResetToken : undefined;

  if (error) {
    return (
      <>
        <DisplayError error={error} />
        <PasswordResetRequest />
      </>
    )
  }

  return (
    <>
      {data?.redeemUserPasswordResetToken === null ? (
        <div>
          <h2>Sign In to your account</h2>
          <p>Success! Sign into your account.</p>
          <SignIn/>
        </div>
      ) : (
        <>
          <h2>Reset Your Password</h2>
          <Form method="POST" onSubmit={handleSubmit}>

            <fieldset disabled={loading} aria-busy={loading}>
              <div>
                <label htmlFor="email">
                  Email Address
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={inputs.email}
                  autoComplete="email"
                  required
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your password"
                  autoComplete="password"
                  value={inputs.password}
                  required
                  onChange={handleChange} />
              </div>
              <div>
                <button type="submit">Reset Password</button>
              </div>
            </fieldset>
          </Form>
        </>
      )
    }

    </>
  )
}