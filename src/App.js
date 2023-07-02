import './App.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';

// Path to baseURL
const baseUrl =
  'https://api.memegen.link/images/buzz/top/bottom.png?token=wxgjeu3jll4dt9q6fihy&amp;width=800&amp;frames=50';

export default function App() {
  // These state variables will be used to store the text input by the user for the top and bottom of the meme and the selected template for the meme.
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [src, setSrc] = useState(baseUrl);

  // In this variable the base URL is updated at three positions based on the user's meme and text choice and outputs a new unique url
  const modifiedUrl = `https://api.memegen.link/images/${
    memeTemplate === '' ? 'buzz' : memeTemplate
  }/${encodeURIComponent(
    topText === '' ? 'top' : topText,
  )}/${encodeURIComponent(
    bottomText === '' ? 'bottom' : bottomText,
  )}.png?token=wxgjeu3jll4dt9q6fihy&width=800&frames=50`;

  // This function expression prevents the event to do his event that is set by default and sets a new event
  const handleDownload = async (event) => {
    event.preventDefault();
    setSrc(modifiedUrl);

    try {
      const response = await fetch(modifiedUrl);
      const blob = await response.blob();
      saveAs(blob);
    } catch (error) {
      console.error('Error appeared while downloading the image:', error);
    }
  };

  return (
    <div className="container">
      <div className="App">
        <form>
          <label>
            Top text
            <input
              value={topText}
              onChange={(event) => setTopText(event.currentTarget.value)}
            />
          </label>
          <label>
            Meme template
            <input
              value={memeTemplate}
              onChange={(event) => setMemeTemplate(event.currentTarget.value)}
            />
          </label>
          <label htmlFor="templateSelector">Select template</label>
          <select
            value={memeTemplate}
            onChange={(event) => setMemeTemplate(event.currentTarget.value)}
          >
            <option value="aag">Aag</option>
            <option value="ants">Ants</option>
            <option value="bender">Bender</option>
            <option value="blb">Blb</option>
            <option value="boat">Boat</option>
            <option value="country">Country</option>
            <option value="doge">Doge</option>
            <option value="fry">Fry</option>
          </select>
          <img data-test-id="meme-image" src={src} alt="Generated Meme" />
          <label>
            Bottom text
            <input
              value={bottomText}
              onChange={(event) => setBottomText(event.currentTarget.value)}
            />
          </label>
          <button onClick={handleDownload}>Download</button>
        </form>
      </div>
    </div>
  );
}
