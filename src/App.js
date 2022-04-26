import {useState} from 'react';
import './styles/App.css';
import html2canvas from 'html2canvas';

function App() {

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [image, setImage] = useState("");

  const onChangeLine1 = function(event){
    setLine1(event.target.value);
  }

  const onChangeLine2 = function(event){
    setLine2(event.target.value);
  }

  const onChangeImage = function(event){
    setImage(event.target.value);
  }

  const onClickExport = function(event){
    event.preventDefault();
    html2canvas(document.querySelector("#capture")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "image.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <>
    <div className="information">
      <h1 className="information__title"> Create a new image. </h1>
      <p className="information__text"> Select your image and enter the text in the top or bottom input, and export it. </p>
    </div>

    <div className="App">

      <select className="select" defaultValue={"DEFAULT"} onChange={onChangeImage}>
        <option className="select__option" value="DEFAULT" disabled> Select your image. </option>
        <option className="select__option" value="girl1.png"> Girl 1. </option>
        <option className="select__option" value="girl2.jpg"> Girl 2. </option>
        <option className="select__option" value="girl3.jpg"> Girl 3. </option>
        <option className="select__option" value="girl4.jpg"> Girl 4. </option>
        <option className="select__option" value="girl5.jpg"> Girl 5. </option>
      </select> <br/>

      <form className="form">
        <label className="form__label" htmlFor="inputTop"> Enter your top text.</label>
        <input className="form__input--text" name="inputTop" id="inputTop" onChange={onChangeLine1} type="text" placeholder="Top line text"/> <br/>
        <label className="form__label" htmlFor="inputBottom"> Enter your bottom text.</label>
        <input className="form__input--text" name="inputBottom" id="inputBottom" onChange={onChangeLine2} type="text" placeholder="Button line text"/> <br/>
        <input className="form__input--button" onClick={onClickExport} type="submit" value="Export."/>
      </form>

      <div className="image">
        <figure className="image__container" id="capture">
          <p className="image__text image__text--top">{line1}</p>
          <p className="image__text image__text--bottom"> {line2}</p>
          <span className="image__warning"> Select a image.</span>
          <img className="image__img" src={"/images/"+image} alt="" />
        </figure>
      </div>

    </div>

    </>
  );
}

export default App;
