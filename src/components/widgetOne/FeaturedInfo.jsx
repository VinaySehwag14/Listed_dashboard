import "./featuredInfo.css";
import { RiVideoDownloadLine } from "react-icons/ri";
import { FiUsers, FiThumbsUp } from "react-icons/fi";
import { BsTags } from "react-icons/bs";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredIcon">
          <RiVideoDownloadLine />
        </span>
        <span className="featuredTitle">Total Transactions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <BsTags />
        </span>
        <span className="featuredTitle">Total Likes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <FiThumbsUp />
        </span>
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredIcon">
          <FiUsers />
        </span>
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        </div>
      </div>
    </div>
  );
}
