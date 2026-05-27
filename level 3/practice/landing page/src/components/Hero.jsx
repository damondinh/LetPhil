
export const Hero = (props) => {
  return (
    <div className="w-full h-full bg-cover bg-center pt-12 mb-2 "
        style={{ backgroundImage: `url(${props.bg})`, height: '700px' }}>
      <h1 className={props.title.style}>{props.title.text}</h1>
      <p className={props.subtitle.style}>{props.subtitle.text}</p>
      {props.buttons && (
        <div className="flex justify-center">
          {props.buttons.map((btn, index) => (
            <button key={btn.text + index} className={btn.style}>{btn.text}</button>
          ))}
        </div>
      )}
    </div>
  );
}