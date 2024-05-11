import LikeButton from "./like-button";

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

function Header({ title }) {
  return (<h1>{title ? title : 'Develop. Preview. Ship.'}</h1>);
}

export default function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header />
      <ul>
        {names.map(name => (<li key={name}>{name}</li>))}
      </ul>
      <LikeButton />
    </div>
  );
}
