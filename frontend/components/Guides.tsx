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
  const guides = data?.allGuides;
  console.log(guides, error, loading);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  return (
    <div>
      {guides.map(guide => <Guide key={guide.id} guide={guide}/>)}
    </div>
  )
}

