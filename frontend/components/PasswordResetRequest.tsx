import Router from "next/router";
import useForm from "../lib/useForm";
import { refetchUserQuery, useRequestResetMutation, useSignUpMutation } from "../types/generated-queries";
import { Form } from "./styles/FormStyles";
import DisplayError from "./ErrorMessage";
import Link from "next/link";
import SignIn from "./SignIn";

export default function PasswordResetRequest() {
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
  });

  const [requestReset, {data, loading, error}] = useRequestResetMutation()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO - add errors to form fields
    if (!inputs.email) return;

    await requestReset({
      variables: {
        email: inputs.email,
      },
    })
    resetForm()
  }

  return (
    <>
      {error && <DisplayError error={error} />}

      {data?.sendUserPasswordResetLink === null && (
        <div>
          <h2>Sign In to your account</h2>
          Success! Check your email for a link.
        </div>
      )}

      <>
        <h2>Request Password Reset</h2>
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
            <button type="submit">Request Password Reset</button>
          </div>
          <div>
            <p>
              <Link href="signup">Sign Up</Link>
            </p>
            <p>
              <Link href="/signin">Sign In</Link>
            </p>
        
          </div>
          </fieldset> 
        </Form>
      </>


    </>
  )
}

