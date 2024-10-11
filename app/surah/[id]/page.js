"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Loader from '@/components/ui/loader';
import { Forward, AudioLines } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SurahDetails = () => {
  const [surahDetails, setSurahDetails] = useState(null);
  const [hoveredAyah, setHoveredAyah] = useState(null);
  const [page, setPage] = useState(1);
  const [audio, setAudio] = useState(null); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentVerse, setCurrentVerse] = useState(null); 
  const { id } = useParams();
  const router = useRouter();

  
  useEffect(() => {
    if (!id) return;

    const fetchSurahDetails = async () => {
      const response = await fetch(`http://localhost:8000/surah/${id}?page=${page}&page_size=5`);
      let data = await response.json();
      if (id !== Number(9)) {
        data.verses[0].Arabic = data.verses[0].Arabic.replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", '').trim();
      }
      setSurahDetails(data);
    };

    fetchSurahDetails();
  }, [id, page]);

  const handleNextPage = () => {
    const totalPages = Math.ceil(surahDetails.total_verses / surahDetails.page_size);
    if (audio) {
      audio.pause();
      setIsPlaying(false); 
      setCurrentVerse(null); 
    }

    if (page < totalPages) {
      setPage(page + 1);
    } else {
      const nextSurahId = parseInt(id) + 1; 
      nextSurahId <= 114 && router.push(`/surah/${nextSurahId}`);
    }
  };

  const handlePreviousPage = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false); 
      setCurrentVerse(null); 
    }

    if (page > 1) {
      setPage(page - 1);
    } else {
      const nextSurahId = parseInt(id) - 1; 
      nextSurahId >= 1 && router.push(`/surah/${nextSurahId}`);
    }
  };

  const onVerseClick = (verse) => {
    localStorage.setItem('currentVerse', verse);
    window.open('/similarverse', '_blank');
  };

  const getAudio = (surahNo, ayahNo) => {
    const audioUrl = `http://localhost:8000/play/${surahNo}/${ayahNo}`;
    
    if (audio) {
      if (audio.src === audioUrl) {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying); 
        setCurrentVerse(isPlaying ? null : ayahNo); 
      } else {
        audio.pause();
        audio.currentTime = 0; 
        const newAudio = new Audio(audioUrl);
        setAudio(newAudio);
        setIsPlaying(true); 
        setCurrentVerse(ayahNo); 
        newAudio.play(); 
        newAudio.onended = () => {
          setIsPlaying(false); 
          setCurrentVerse(null); 
        };
      }
    } else {
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      setIsPlaying(true);
      setCurrentVerse(ayahNo); 
      newAudio.play();

      newAudio.onended = () => {
        setIsPlaying(false);
        setCurrentVerse(null); 
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-10 ">
      {surahDetails ? (
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-teal-800">
            Surah No: {surahDetails.verses[0]?.SurahNo}
          </h1>
          {id !== Number(9) && (
            <p className="text-teal-800 font-bold text-center text-xl ">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          )}
          <div className="flex justify-center space-x-4 mb-6 absolute left-0 top-2 p-6">
            <Forward
              onClick={!(parseInt(id) === 1 && page === 1) ? handlePreviousPage : undefined}
              className={`cursor-pointer text-teal-800 scale-x-[-1] ${
                (parseInt(id) === 1 && page === 1) ? 'text-slate-400 opacity-50 cursor-pointer' : ''
              }`}
              disabled={parseInt(id) === 1 && page === 1}
            />
            <Forward
              onClick={
                !(parseInt(id) === 114 && page === Math.ceil(surahDetails.total_verses / surahDetails.page_size))
                  ? handleNextPage
                  : undefined
              }
              className={`cursor-pointer text-teal-800 ${
                parseInt(id) === 114 && page === Math.ceil(surahDetails.total_verses / surahDetails.page_size)
                  ? 'disabled:text-slate-400 opacity-50 cursor-pointer'
                  : ''
              }`}
              disabled={parseInt(id) === 114 && page === Math.ceil(surahDetails.total_verses / surahDetails.page_size)}
            />
          </div>
          <p className="text-center text-teal-800 mb-4 absolute right-0 top-2 p-6 text-xs">
            Page {surahDetails.page} of {Math.ceil(surahDetails.total_verses / surahDetails.page_size)}
          </p>
          <Button
          onClick={()=>{router.push('/surah')}}
          className="absolute right-0 mr-5 top-14 text-xs bg-teal-800 p-2">Surah List</Button>
          <div className="space-y-8">
            {surahDetails.verses.map((verse) => (
              <div key={verse.AyahNo} className="flex flex-col items-center space-y-4">
                <div className="flex ">
                  <div>
                  <div 
                    className="relative text-right text-2xl font-bold text-teal-800 cursor-pointer hover:bg-gradient-to-r from-green-100 to-teal-100 p-3 rounded-lg transition"
                    onClick={() => onVerseClick(verse.Arabic)}
                    onMouseEnter={() => setHoveredAyah(verse.AyahNo)} 
                    onMouseLeave={() => setHoveredAyah(null)} 
                  >
                    {verse.Arabic}
                    {/* {hoveredAyah === verse.AyahNo && (
                      <p className="absolute top-11 left-0 p-1 text-[12px] text-black rounded ">
                        Find similar verses
                      </p>
                    )} */}
                  </div></div>
                  <div>
                  <AudioLines 
                    className={`mt-3 left-96 right-0 cursor-pointer ${currentVerse === verse.AyahNo ? 'text-teal-800' : 'text-gray-600'}`}
                    onClick={() => getAudio(verse.SurahNo, verse.AyahNo)} 
                  /></div>
                </div>
                <div className="text-lg text-gray-600">
                  {verse.EnglishTranslation}
                </div>
                <div className="text-lg text-gray-500">
                  {verse.UrduTranslation}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SurahDetails;
