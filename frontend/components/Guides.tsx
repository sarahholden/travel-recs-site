import Guide from "./Guide";
import { useAllGuidesQueryQuery } from "../types/generated-queries";

export default function Guides() {
  const {data, error, loading} = useAllGuidesQueryQuery();
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (!data?.allGuides) return <p>There was an error loading this page.</p>
  return (
    // TODO: Fix this error
    <div>
      {data.allGuides.map((guide) => {
        if (!guide) return null;
        return <Guide key={guide.id} guide={guide}/>
      })
      }
    </div>
  )
}

