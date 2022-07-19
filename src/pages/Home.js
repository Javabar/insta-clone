import SignOrLog from "../components/signOrLog";
import { Description } from "../css/App.styled";


const Home = ({ user, setUser }) => {
  return (
    <div>
      <div>
        <Description>Home</Description>
        <SignOrLog setter={setUser} user={user} />
        <h1>{user}</h1>
      </div>
    </div>
  );
};

export default Home;