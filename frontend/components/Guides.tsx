import Guide from "./Guide";
import styled from "styled-components";
import { Guide as GuideQueryType } from "../types/generated-queries";

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

type GuideType = GuideQueryType | null | undefined;

export default function Guides({ guides }: { guides?: GuideType[] }) {
  return (
    // TODO: Fix this error
    <GuideGrid>
      {guides ? (
        guides.map((guide) => guide && <Guide key={guide?.id} guide={guide} />)
      ) : (
        <div>There are no guides</div>
      )}
    </GuideGrid>
  );
}
