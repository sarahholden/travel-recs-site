import Link from 'next/link';
import { Guide as guideType } from '../types/generated-queries';

type GuideProps = { guide: guideType };

export default function Guide({ guide }: GuideProps) {
  return (
    <div>
        
      <h2>
        <Link href={`/guide/${guide.id}`}>{guide.name}</Link>
        </h2>
      {guide.location_info && (
        <p>
          {guide.location_info}
        </p>
      )}

      {/* TODO: What is the cleanest way to write this?  */}
      {guide?.image?.publicUrlTransformed && (
        <img src={guide.image.publicUrlTransformed} alt="asdf" />
      )}
    </div>
  )
}