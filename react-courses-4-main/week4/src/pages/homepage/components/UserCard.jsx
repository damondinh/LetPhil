import image from "../../../assets/default.jpg";

// const users/data = [
//     { name: "Diego", jobTitle: "software engineer"},
//     { name: "Alex", jobTitle: "software engineer"},
//     { name: "Toni", jobTitle: "software engineer"},
//   ];

function UserCards({ data }) {
  return (
    <section>
      {data.map((user) => (
        <>
          <img src={image} alt="portfolio selfie" />
          <h1>{user.name}</h1>
          <h3>{user.jobTitle}</h3>
        </>
      ))}
    </section>
  );
}

export default UserCards;
