import { Guide as guideType } from '../types/generated-queries';

type GuideProps = { guide: guideType };

export default function Guide({ guide }: GuideProps) {
  return (
    <div>
      {guide.name}

    </div>
  )
}