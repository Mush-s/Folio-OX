import Back from "../Components/Back/Back";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Back />
      <div className="profile">
        <div className="picture">
          <img src="http://livedoor.blogimg.jp/snoo_frontpage/imgs/9/4/9460ea59-s.png" />
        </div>
        <div className="intro">
            <h1>一色陽太</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
