import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Guide from "./Guide";

const ALL_GUIDES_QUERY = gql`
  query ALL_GUIDES_QUERY {
    allGuides {
      id
      name
      location_info
      status
      destinations {
        name
        hover_description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;


export default function Guides() {
  const {data, error, loading} = useQuery(ALL_GUIDES_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (!data) return <p>There was an error loading this page.</p>
  return (
    <div>
      {data.allGuides.map(guide => <Guide key={guide.id} guide={guide}/>)}
    </div>
  )
}

