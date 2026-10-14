import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResult] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="w-8 h-8" />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="font-bold text-lg">Photos In {album.title}</h3>
        <Button loading={addPhotoResult.isLoading} onClick={handleAddPhoto}>
          + Add photo
        </Button>
      </div>
      <div className="mx-8 flex flex- flex-wrap justify-center">{content}</div>
    </div>
  );
}

export default PhotosList;
