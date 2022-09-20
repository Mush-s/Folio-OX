import Back from "../Components/Back/Back";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="first">
          <div className="picture">
            <img src="http://livedoor.blogimg.jp/snoo_frontpage/imgs/9/4/9460ea59-s.png" />
          </div>
          <div className="intro">
            <div className="name">
              <h4>いっしきようた</h4>
              <h1>一色陽太</h1>
            </div>
            <div className="job">職種：学生</div>
            <div className="post">
              <div>大阪市東成区玉津１−１１−１６</div>
              <div>080-1514-7515</div>
            </div>
          </div>
        </div>
        <div className="middle">
          <h1>プロフィール</h1>
          <h2>私は</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
