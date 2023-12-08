import Router from "next/router";
import useForm from "../lib/useForm";
import { refetchUserQuery, useSignInMutation } from "../types/generated-queries";
import { Form } from "./styles/FormStyles";
import DisplayError from "./ErrorMessage";
import Link from "next/link";

export default function SignIn() {
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
    password: '',
  });

  const [signInMutation, {data, loading}] = useSignInMutation()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO - add errors to form fields
    if (!inputs.email || !inputs.password) return;

    const res = await signInMutation({
      variables: {
        email: inputs.email,
        password: inputs.password
      },
      refetchQueries: [refetchUserQuery()],
    })
    resetForm()

    if (res?.data?.authenticateUserWithPassword?.__typename === 'UserAuthenticationWithPasswordSuccess' && res.data.authenticateUserWithPassword.item?.id) {
      Router.push({
        pathname: `/account`,
      })
    }
  }

  const error =
  data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure' &&
  data.authenticateUserWithPassword;
  
  return (
    <>
      <h2>Reset Password</h2>
      <Form method="POST" onSubmit={handleSubmit}>
        {error && <DisplayError error={error} />}
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
              value={inputs.password}
              onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Reset Password</button>
          </div>
          <div>
            <p>
              <Link href="signup">Sign Up</Link>
            </p>
            <p>
              <Link href="signin">Sign In</Link>
            </p>
        
          </div>
        </fieldset>
      </Form>
    </>
  )
}