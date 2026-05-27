export const User = (props) => {
  return (
    <div>
      Hello, {props.name}!
      {props.age && <p>Age: {props.age}</p>}
      {props.data && (
        <div>
          <p>City: {props.data.city}</p>
          <p>State: {props.data.state}</p>
        </div>
      )}
    </div>
  );
}