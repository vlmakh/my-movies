import { ImageList, ImageCard, SmallImg, BigImg } from './ActorImages.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImagesByActor } from 'services/api';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/nophoto.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from 'components/Box/Box';

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: bigPhotoIdx,
    lazyLoad: 'ondemand',
  };

  return (
    <>
      <ImageList>
        {images.map((image, idx) => (
          <ImageCard key={image.file_path}>
            <SmallImg
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
          <Slider {...settings}>
            {images.map(image => (
              <Box key={image.file_path} display="flex" alignItems="center">
                <BigImg
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt={image.file_path}
                />
              </Box>
            ))}
          </Slider>
        </Modal>
      )}
    </>
  );
}
