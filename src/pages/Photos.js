import { useState } from "react";
import PicPosts from "../components/PicPosts";
import { Description } from "../css/App.styled";

const Photos = ({ user }) => {
  const [photos, setPhotos] = useState([]); // here its is
  return (
    <div>
      <Description>Insta-mimic</Description>
      <h1>{user}</h1>
      <PicPosts setPhotos={setPhotos} photos={photos} user={user}/>
    </div>
  );
};

export default Photos;