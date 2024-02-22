REACT MEME GENERATOR

![Bildschirmfoto 2024-02-22 um 09 56 55](https://github.com/stefanselic/react-meme-generator/assets/129748801/57b1b678-f3de-466a-ac7a-83b06d25c93b)



# TODO's

Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

It should allow the user to:

- [x] Enter text for the top and bottom of the meme
  - [x] The top text box needs to have a label element associated with it containing the text `Top text`
  - [x] The bottom text box needs to have a label element associated with it with the text `Bottom text`
  - [x] Both text boxes should be empty when the page first loads
- [x] Preview the generated meme
  - [x] The image element needs to have an html attribute set as follows: `data-test-id="meme-image"`
    - [x] This image element should show a working image when the page first loads
- [x] Change the meme template (the background image)
  - [x] The meme template selector element needs to have a label element associated with it containing the text `Meme template`
  - [x] If the user follows the steps below, the `doge` meme template needs to be selected:
    1. Click on the label of the meme template selector
    2. Clear any existing value (eg. with a text box)
    3. Type the text `doge`
    4. Hit enter
- [x] Download the meme by clicking on a button
  - [x] The button element needs to contain the text `Download`
