import { useState } from "react"

type GuideInputsType = {
  name?: string;
  location_info?: string;
}

type ElementPropsType = {
  name: string;
  type: string;
  value: string | number | File
}

export default function useForm(initial: GuideInputsType = {}) {
  const [inputs, setInputs] = useState(initial)

  
  function handleChange(e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) {
    let {name, type, value}: ElementPropsType = e.target;

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'file' && e?.target.files) {
      value = e.target.files[0]
    }

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']))
    setInputs(blankState)
  }

  return { inputs, handleChange, resetForm, clearForm }
  
}