import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <div className="flex flex-row gap-2 items-center justify-between">
      <Button onClick={handleRemoveAlbum} loading={results.isLoading}>
        <GoTrash />
      </Button>
      <h1 className="text-xl font-bold">{album.title}</h1>
    </div>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
