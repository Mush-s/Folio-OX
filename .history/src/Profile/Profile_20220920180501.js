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
          <div className="name">
            <h1>一色陽太</h1>
          </div>
          <div className="job">職種：学生</div>
          <div className="post">大阪市東成区玉津１−１１−１６</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
