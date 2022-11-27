import { ImageList, ImageCard, ImageImg } from './ActorImages.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImagesByActor } from 'services/api';
import imageplaceholder from 'images/nophoto.jpg';

export default function ActorImages() {
  const params = useParams();
  // console.log(params.actorId);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImagesByActor(params.actorId).then(data => {
      // console.log(data);
      setImages(data.profiles);
    });
  }, [params.actorId]);

  return (
    <>
      <ImageList>
        {images.map(image => (
          <ImageCard key={image.file_path}>
            <ImageImg
              width="100"
              src={
                image.file_path
                  ? `https://image.tmdb.org/t/p/w200${image.file_path}`
                  : imageplaceholder
              }
              alt="photo"
            />
          </ImageCard>
        ))}
      </ImageList>
    </>
  );
}
