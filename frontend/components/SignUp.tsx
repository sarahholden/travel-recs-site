import Router from "next/router";
import useForm from "../lib/useForm";
import { refetchUserQuery, useSignUpMutation } from "../types/generated-queries";
import { Form } from "./styles/FormStyles";
import DisplayError from "./ErrorMessage";
import Link from "next/link";
import SignIn from "./SignIn";

export default function SignUp() {
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
    password: '',
    name: '',
  });

  const [signUpMutation, {data, loading, error}] = useSignUpMutation()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO - add errors to form fields
    if (!inputs.email || !inputs.password || !inputs.name) return;

    const res = await signUpMutation({
      variables: {
        email: inputs.email,
        password: inputs.password,
        name: inputs.name
      },
      refetchQueries: [refetchUserQuery()],
    })
    resetForm()
  }

  return (
    <>
    {error && <DisplayError error={error} />}


      {data?.createUser ? (
        <div>
          <h2>Sign In to your account</h2>
          Signed up with {data.createUser.email}. Sign in to go to your account.
          <SignIn/>
        </div>
      ) : (
        <>
          <h2>Sign Up for an account</h2>
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
                <label htmlFor="name">
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                  value={inputs.name}
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
                <button type="submit">Sign Up</button>
              </div>
              <div>
                Already have an account? <Link href="signin">Sign In</Link>
              </div>
            </fieldset>
          </Form>
        </>
      )
    }

    </>
  )
}