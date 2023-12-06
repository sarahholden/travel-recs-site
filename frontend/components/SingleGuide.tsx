import { useGetGuideQuery } from "../types/generated-queries";

export default function SingleGuide({id}: {id: string }) {
  const { data, loading, error } = useGetGuideQuery({
    variables: { id },
  });

  console.log(data)

  return (
    data?.Guide ? (
      <div>
        {data.Guide.name}
        {data.Guide.location_info}
        {data.Guide.destinations?.map(destination => destination.name)}
      </div>
    ) : null

  )
}