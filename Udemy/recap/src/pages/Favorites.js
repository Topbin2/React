import { useContext } from "react";

import FavoriteContext from "../components/store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
