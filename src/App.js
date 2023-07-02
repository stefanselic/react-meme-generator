import './App.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';

// Base URL
const baseUrl = 'https://api.memegen.link/images/';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('buzz');

  const handleDownload = async (event) => {
    event.preventDefault();

    const memeUrl = `${baseUrl}${memeTemplate}/${encodeURIComponent(
      topText,
    )}/${encodeURIComponent(bottomText)}.png`;

    try {
      const response = await fetch(memeUrl);
      const blob = await response.blob();
      saveAs(blob);
    } catch (error) {
      console.error('Error occurred while downloading the image:', error);
    }
  };

  const isFormIncomplete = topText === '' || bottomText === '';

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
            <option value="buzz">Buzz</option>
            <option value="aag">Aag</option>
            <option value="ants">Ants</option>
            <option value="bender">Bender</option>
            <option value="blb">Blb</option>
            <option value="boat">Boat</option>
            <option value="country">Country</option>
            <option value="doge">Doge</option>
            <option value="fry">Fry</option>
          </select>
          <img
            data-test-id="meme-image"
            src={`${baseUrl}${memeTemplate}/${encodeURIComponent(
              topText,
            )}/${encodeURIComponent(bottomText)}.png`}
            alt="Generated Meme"
          />
          <label>
            Bottom text
            <input
              value={bottomText}
              onChange={(event) => setBottomText(event.currentTarget.value)}
            />
          </label>
          <button disabled={isFormIncomplete} onClick={handleDownload}>
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
