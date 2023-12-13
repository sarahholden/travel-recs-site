import Link from "next/link";
import { Guide as guideType } from "../types/generated-queries";
import styled from "styled-components";

type GuideProps = { guide: guideType };

const GuideStyles = styled.article`
  .image-wrap {
    display: block;
    width: 100%;
    padding-bottom: 60%;
    height: 0;
    overflow: hidden;
    position: relative;
    border-radius: 3rem 3rem 0.4rem 0.4rem;
    img {
      object-fit: cover;
      object-position: center center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Guide({ guide }: GuideProps) {
  return (
    <GuideStyles>
      <div className="image-wrap">
        {guide.image?.publicUrlTransformed && (
          <Link href={`/guide/${guide.id}`}>
            <a>
              <img
                src={guide.image.publicUrlTransformed}
                alt={guide.altText ?? `Image of ${guide.name}`}
              />
            </a>
          </Link>
        )}
      </div>
      <h2>
        <Link href={`/guide/${guide.id}`}>{guide.name}</Link>
      </h2>
      {guide.location_info && <p>{guide.location_info}</p>}
    </GuideStyles>
  );
}
