import React, { useCallback, useEffect, useState } from 'react';
import { getImgs } from '../fetchData/fetchData';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Spinner } from './Spinner';

export const App = () => {
  //State
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [dataArr, setDataArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setIsEmpty(false);
    try {
      const fetch = await getImgs(query, page, per_page);
      const fetchArr = fetch.hits;
      fetch.hits.length ? setIsEmpty(false) : setIsEmpty(true);
      setDataArr(prev => [...prev, ...fetchArr]);
      setMaxPages(Math.floor(fetch.totalHits / per_page));
    } catch (error) {
      console.log(error.massage);
    } finally {
      setLoading(false);
    }
  }, [page, per_page, query]);

  useEffect(() => {
    fetchData(query, page, per_page);
  }, [page, query, per_page, fetchData]);

  function handleChangeQuery(queryStr) {
    setQuery(queryStr);
    setPage(1);
    setDataArr([]);
  }

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleOpenModal = (img, id) => {
    setIsOpen(!isOpen);
    setCurrentImg(img);
    setCurrentId(id);
  };

  return (
    <>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {loading && <Spinner />}

      <ImageGallery dataArr={dataArr} handleOpenModal={handleOpenModal} />
      {dataArr.length && page < maxPages ? (
        <Button onLoadMore={onLoadMore} />
      ) : null}
      {isEmpty && <h2>Nothing found</h2>}
      {isOpen && (
        <Modal close={handleOpenModal}>
          <img src={currentImg} alt={currentId} />
        </Modal>
      )}
    </>
  );
};

export default App;
