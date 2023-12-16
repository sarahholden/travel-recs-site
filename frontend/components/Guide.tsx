import Link from "next/link";
import {
  Guide as guideType,
  useAddToFavoritesMutation,
} from "../types/generated-queries";
import styled from "styled-components";

type GuideProps = { guide: guideType };

const GuideStyles = styled.article`
  .image-wrap {
    display: block;
    width: 100%;
    padding-bottom: 70%;
    height: 0;
    overflow: hidden;
    position: relative;
    border-radius: 1.6rem;
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
  const [addToFavoritesMutation, { data, error, loading }] =
    useAddToFavoritesMutation({
      variables: {
        guideId: guide.id,
      },
    });

  function clickHandler() {
    addToFavoritesMutation();
    console.log("success!");
  }

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
      <button onClick={clickHandler} aria-label="Add To Favorites">
        Heart
      </button>
      {guide.location_info && <p>{guide.location_info}</p>}
    </GuideStyles>
  );
}
