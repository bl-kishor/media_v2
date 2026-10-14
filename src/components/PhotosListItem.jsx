import { GoTrash } from "react-icons/go";
import { useDeletePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [deletePhoto] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div className="relative m-2 cursor-pointer">
      <img src={photo.url} alt="random pic" className="w-20 h-20" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80">
        <GoTrash className="text-3xl" onClick={handleDeletePhoto} />
      </div>
    </div>
  );
}

export default PhotosListItem;
