import { ImageList, ImageCard, ImageImg } from './ActorImages.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImagesByActor } from 'services/api';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/nophoto.jpg';

export default function ActorImages() {
  const params = useParams();
  // console.log(params.actorId);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bigPhotoIdx, setBigPhotoIdx] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImageClick = idx => {
    setBigPhotoIdx(idx);
    toggleModal();
  };

  useEffect(() => {
    fetchImagesByActor(params.actorId).then(data => {
      // console.log(data);
      setImages(data.profiles);
    });
  }, [params.actorId]);

  return (
    <>
      <ImageList>
        {images.map((image, idx) => (
          <ImageCard key={image.file_path}>
            <ImageImg
              width="160"
              src={
                image.file_path
                  ? `https://image.tmdb.org/t/p/w200${image.file_path}`
                  : imageplaceholder
              }
              alt={image.file_path}
              onClick={() => onImageClick(idx)}
            />
          </ImageCard>
        ))}
      </ImageList>

      {showModal && (
        <Modal onClose={toggleModal}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${images[bigPhotoIdx].file_path}`}
            alt={images[bigPhotoIdx].file_path}
          />
        </Modal>
      )}
    </>
  );
}
