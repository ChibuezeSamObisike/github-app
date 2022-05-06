import { FC } from "react";
import ProfileImg from "../assets/Profile img.png";
import ProfileDetails from "./ProfileDetails";
import SocialMediaCard from "./SocialMediaCard";
import { IDetail } from "./../interfaces/interface";
import moment from "moment";

interface IProp {
  userDetails: IDetail;
}

const DetailsCard: FC<IProp> = ({ userDetails }: IProp) => {
  return (
    <div className="card_main">
      <div style={{ width: "25%" }}>
        <img
          src={userDetails.avatar_url ?? ProfileImg}
          className="img-profile"
        />
      </div>
      <div style={{ width: "70%" }}>
        <div className="detailsndDiv">
          <div>
            <h5>{userDetails.name ?? userDetails.login}</h5>
            <p style={{ color: "#0079ff" }}>
              {`@${userDetails.login}` ?? `@${userDetails.name}`}
            </p>
          </div>
          <p className="p-sm">
            Joined{" "}
            {userDetails.created_at
              ? moment(new Date(userDetails.created_at)).format("Do MMM YYYY")
              : "--"}
          </p>
        </div>
        <p className="p-profile">
          {userDetails.bio ?? "This Profile has no bio"}
        </p>

        <div className="detailsCardDiv">
          <ProfileDetails userDetails={userDetails} />
        </div>
        <SocialMediaCard userDetails={userDetails} />
      </div>
    </div>
  );
};

export default DetailsCard;
