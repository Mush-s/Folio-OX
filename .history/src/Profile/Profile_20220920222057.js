import { Link } from "react-router-dom";
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
              <h1>一色 陽太</h1>
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
          <h2>関西外国語大学英語キャリア学部3年の一色陽太です。</h2>
          <h2>
            友達に勧められて始めたプログラミングにハマりIT業界を志望しています
          </h2>
          <h2>趣味はチェス、ポーカー、ギターです。アニメも大好きです。</h2>
        </div>
        <div className="last">
          <Link to="/">HOMEへ</Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
