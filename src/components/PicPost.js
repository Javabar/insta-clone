import { useEffect } from "react";
import { PostedPic, Username } from "../css/photos.styled";

const PicPosts = ({ photos, setPhotos, user }) => {

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages(setPhotos);
  },[]); 

  return (
    <div>
     
      {user && photos.map((item, index) => {
        return (
          <div>
            <Username>{item.author}</Username>
            <PostedPic src={item.download_url} alt="Random Pic" />
          </div>
        );
      })}
    </div>
  );
};

export default PicPosts;