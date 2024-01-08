import styled from "styled-components";
import { Destination, useGetGuideQuery } from "../types/generated-queries";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { GetGuideDocument } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

const GuideStyles = styled.div`
  background-color: yellow;
`;

export default function SingleGuide({ id }: { id: string }) {
  const { data, loading, error } = useGetGuideQuery({
    variables: { id },
  });

  if (error) return <DisplayError error={error} />;
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
