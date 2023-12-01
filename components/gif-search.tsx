import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

interface Gif {
  images: {
    original: {
      url: string;
    };
  };
}

interface GiphySearchProps {
  numberOfGifs: number;
}

const GiphySearch: React.FC<GiphySearchProps> = ({ numberOfGifs }) => {
  const GIPHY_KEY = 'ACJfG6KQRvmEFDnD3eHzJpwi0zrMeiH5';
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(true);

  async function giphySearch(keyword: string, limit: number) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=${limit}`);
      const data = await response.json();
      return data.data as Gif[];
    } catch (error) {
      console.error('Error fetching from Giphy:', error);
      throw error;
    }
  }

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const result = await giphySearch('dog', numberOfGifs);
        setGifs(result);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, [numberOfGifs]);

  return (
    <div className="max-w-full h-fit rounded-lg items-center justify-center flex flex-wrap   bg-[#242933] p-4">
    {loading ? (
      <div className="loader-wrapper">
        <div className="lds-circle">
          <div></div>
        </div>
      </div>
    ) : (
      gifs.map((gif, index) => (
        <div key={index} className="flex-shrink-0 w-fit h-fit overflow-hidden mb-4 mr-4">
          <div className="flex flex-col items-center">
            <img
              className="hover:shadow-lg transition cursor-pointer min-w-[150px] h-[150px] object-cover"
              src={gif.images.original.url}
              alt={`GIF ${index}`}
            />
            <Button variant="secondary" onClick={() => window.open(gif.images.original.url)} className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      ))
    )}
  </div>
  
  );
};

export default GiphySearch;
