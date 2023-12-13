import Link from "next/link";
import useUser from "../hooks/User";
import { useGetFavoritesQuery } from "../types/generated-queries";
import SignIn from "./SignIn";
import Guide from "./Guide";

export default function Favorites() {
  const user = useUser();
  if (!user) return <SignIn />;
  const { id } = user;

  const { data, error, loading } = useGetFavoritesQuery({
    variables: { userId: id },
  });
  console.log(data, error, loading);
  if (loading) return <div>Loading Spinner</div>;
  if (error) return <div>There was a problem loading this page.</div>;

  return (
    <>
      <h2>My Saved Guides</h2>
      {data?.allFavoritesItems ? (
        data.allFavoritesItems.map((favorite) => {
          return (
            <>
              {favorite?.guide && (
                <Guide key={favorite.guide?.id} guide={favorite.guide} />
              )}
            </>
          );
        })
      ) : (
        <div>
          You have no saved guides. Explore all guides{" "}
          <Link href="/guides">here</Link> to plan your next trip.
        </div>
      )}
    </>
  );
}
