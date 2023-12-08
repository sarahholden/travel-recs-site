import Router from "next/router";
import useForm from "../lib/useForm";
import { refetchUserQuery, useSignInMutation } from "../types/generated-queries";
import { Form } from "./styles/FormStyles";
import DisplayError from "./ErrorMessage";

export default function SignIn() {
  const {inputs, handleChange, resetForm} = useForm({
    email: '',
    password: '',
  });

  const [signInMutation, {data, loading}] = useSignInMutation({
    variables: {
      email: inputs.email,
      password: inputs.password
    },
    refetchQueries: [refetchUserQuery()],
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signInMutation()
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
    <Form onSubmit={handleSubmit}>
      {error && <DisplayError error={error} />}
      <fieldset disabled={loading} aria-busy={loading}>
        <div>
          <label htmlFor="email">
            Email Address
          </label>
          <input 
            type="text"
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
          <button type="submit">Sign In</button>
        </div>
      </fieldset>
    </Form>
  )
}