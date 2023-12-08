import { useGetGuideQuery } from "../types/generated-queries";

export default function SingleGuide({id}: {id: string }) {
  const { data, loading, error } = useGetGuideQuery({
    variables: { id },
  });

  if (!data || error ) return <div>Error loading page</div>
  if ( loading ) return <div>Loading...</div>
  
  const {Guide} = data;

  return (
    Guide ? (
      <div>
        {Guide.name}
        {Guide.location_info}
        {Guide.destinations?.map(destination => destination.name)}
        {Guide.image?.publicUrlTransformed && (
          <img src={Guide.image.publicUrlTransformed} alt={Guide.altText ?? `Image of ${Guide.name}`} />
        )}
      </div>
    ) : null

  )
}