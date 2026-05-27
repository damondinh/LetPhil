// descriptions: ["First Description","Second Description","Third Description"]
// map returns a new array

// for (i = 0; i < descriptions.length; i++)

function Carousel({ descriptions }) {
  // filter, reduce, map | for, while, foreach, do/while,

  return (
    <section>
      {descriptions.map((description) => (
        <>
          <img src="" alt="playing sports" />
          <h2>{description}</h2>
        </>
      ))}
    </section>
  );
}

export default Carousel;
