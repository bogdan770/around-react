function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <li className="element">
        <button className="element__delete"></button>
        <img
          className="element__image"
          onClick={handleClick}
          src={props.link}
        />
        <div className="element__conteiner">
          <h2 className="element__title">{props.title}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <span className="element__like-count">{props.likes}</span>
          </div>
        </div>
      </li>
    </>
  );
}

export { Card };
