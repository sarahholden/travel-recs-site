import { HTMLInputTypeAttribute, useEffect, useState } from "react"

type GuideInputsType = {
  name?: string;
  location_info?: string;
  image?: File;
  altText?: string;
}

type UserInputsType = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

type ElementPropsType = {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string | number | File
}

type FormInputsTypes = GuideInputsType & UserInputsType;

export default function useForm(initial: FormInputsTypes = {}) {
  const [inputs, setInputs] = useState(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  
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