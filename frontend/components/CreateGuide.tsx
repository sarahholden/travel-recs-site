import useForm from '../lib/useForm'

export default function CreateGuide() {
  const {inputs, handleChange, resetForm, clearForm} = useForm({
    name: '',
    location_info: ''
  });
  
  return (
    <div>
      <form action="">
        <fieldset>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="City Name"
              value={inputs.name}
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="location_info">
              Location Info
            </label>
            <input 
              type="text"
              id="location_info"
              name="location_info"
              placeholder="Location Info"
              value={inputs.location_info}
              onChange={handleChange} />
          </div>
          <button type="button" onClick={clearForm}>Clear Form</button>
          <button type="submit">Add Guide</button>
        </fieldset>
      </form>
    </div>
  )


}