import styled from "styled-components";
import { Destination, useGetGuideQuery } from "../types/generated-queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const GuideStyles = styled.div`
  background-color: yellow;
`;

export const GET_GUIDE_QUERY = gql`
  query GET_GUIDE_QUERY($id: ID!) {
    Guide(where: { id: $id }) {
      id
      name
      location_info
      status
      image {
        publicUrlTransformed
      }
      altText
      destinations {
        id
        name
        hover_description
        photo {
          id
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleGuide({ id }: { id: string }) {
  // const { data, loading, error } = useGetGuideQuery({
  //   variables: { id },
  // });

  const { data, loading, error } = useQuery(GET_GUIDE_QUERY, {
    variables: {
      id,
    },
  });

  console.log(data, loading, error);

  if (error) return <div>Error loading page</div>;
  if (loading) return <div>Loading...</div>;

  return data?.Guide ? (
    <GuideStyles data-testid="singleGuide">
      {data.Guide.name}
      {data.Guide.location_info}
      {data.Guide.destinations?.map(
        (destination: Destination) => destination.name
      )}
      {data.Guide.image?.publicUrlTransformed && (
        <img
          src={data.Guide.image.publicUrlTransformed}
          alt={data.Guide.altText ?? `Image of ${data.Guide.name}`}
        />
      )}
    </GuideStyles>
  ) : null;
}
