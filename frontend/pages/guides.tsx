import Guides from "../components/Guides";
import { useAllGuidesQueryQuery } from "../types/generated-queries";

export default function guidesPage() {
  const { data, error, loading } = useAllGuidesQueryQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  // if (!data?.allGuides) return null;

  return data?.allGuides ? (
    <div>
      <Guides guides={data.allGuides} />
    </div>
  ) : null;
}
