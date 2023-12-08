import { useUserQuery } from "../types/generated-queries";


export default function useUser() {
  const { data, loading, error } = useUserQuery();

  return data?.authenticatedItem;
}

// Create User component
// Create a custom hook for getting the user useUser
// Authenticated item query (union type ...on)