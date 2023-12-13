import Guide from "./Guide";
import { useAllGuidesQueryQuery } from "../types/generated-queries";
import styled from "styled-components";

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

export default function Guides() {
  const { data, error, loading } = useAllGuidesQueryQuery();
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    // TODO: Fix this error
    <GuideGrid>
      {data?.allGuides ? (
        data.allGuides.map(
          (guide) => guide && <Guide key={guide?.id} guide={guide} />
        )
      ) : (
        <div>There are no guides</div>
      )}
    </GuideGrid>
  );
}
