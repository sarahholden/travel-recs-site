import useForm from "../lib/useForm";
import Router from "next/router";
import { Form } from "./styles/FormStyles";
import {
  useCreateGuideMutation,
  refetchAllGuidesQueryQuery,
} from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import useUser from "../hooks/User";
import SignIn from "./SignIn";

export default function CreateGuide() {
  const user = useUser();
  const { inputs, handleChange, resetForm, clearForm } = useForm();

  if (!user) {
    return <SignIn />;
  }

  const [createGuideMutation, { data, error, loading }] =
    useCreateGuideMutation({
      variables: {
        name: inputs.name,
        location_info: inputs.location_info,
        image: inputs.image,
        altText: inputs.altText,
      },
      refetchQueries: [refetchAllGuidesQueryQuery()],
    });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { data } = await createGuideMutation();
    clearForm();

    data?.createGuide?.id &&
      void Router.push({
        pathname: `/guide/${data.createGuide.id}`,
      });
  }

  return (
    <div>
      <Form action="" onSubmit={handleSubmit}>
        {error && <DisplayError error={error} />}
        <fieldset disabled={loading} aria-busy={loading}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="City Name"
              value={inputs.name}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location_info">Location Info</label>
            <textarea
              id="location_info"
              name="location_info"
              placeholder="Location Info"
              value={inputs.location_info}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">Location Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="altText">Image Alt Text</label>
            <input
              type="text"
              id="altText"
              name="altText"
              placeholder="Alt Text"
              value={inputs.altText}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="button" onClick={clearForm}>
              Clear Form
            </button>
          </div>
          <div>
            <button type="submit">Add Guide</button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
}
