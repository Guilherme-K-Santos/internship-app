import '../styles/SliderItem.scss';

function SliderItem(props) {
  return (
    <div className="slider-item">
        <h3>{props.title}</h3>
        <div className="main-p-format">{props.text}</div>
    </div>
  );
};

export default SliderItem;
