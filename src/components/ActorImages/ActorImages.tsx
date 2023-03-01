import { ImgItemStyled } from './ActorImages.styled';
import { List, Item } from 'components/BaseComps/BaseComps';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImagesByActor } from 'services/api';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/nophoto.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from 'components/Box/Box';
import { IImage } from 'components/types';

export default function ActorImages() {
  const { actorId } = useParams() as any;
  const [images, setImages] = useState<Array<IImage>>([]);
  const [showModal, setShowModal] = useState(false);
  const [bigPhotoIdx, setBigPhotoIdx] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImageClick = (idx: number) => {
    setBigPhotoIdx(idx);
    toggleModal();
  };

  useEffect(() => {
    fetchImagesByActor(actorId).then(data => {
      setImages(data.profiles);
    });
  }, [actorId]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: bigPhotoIdx,
    // lazyLoad: 'ondemand',
    draggable: true,
  };

  return (
    <>
      <List>
        {images.map((image, idx) => (
          <Item key={image.file_path}>
            <ImgItemStyled
              width="200"
              src={
                image.file_path
                  ? `https://image.tmdb.org/t/p/w200${image.file_path}`
                  : imageplaceholder
              }
              alt={image.file_path}
              loading="lazy"
              onClick={() => onImageClick(idx)}
            />
          </Item>
        ))}
      </List>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Slider {...settings}>
            {images.map(image => (
              <Box key={image.file_path} display="flex" alignItems="center">
                <img
                  width="100%"
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
