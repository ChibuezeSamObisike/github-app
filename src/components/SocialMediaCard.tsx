import { FC } from "react";
import { LocationIcon } from "../assets/Svg/Location";
import { TwitterIcon } from "../assets/Svg/Location";
import { WebsiteIcon } from "../assets/Svg/Location";
import { CompanyIcon } from "../assets/Svg/Location";
import { IDetail } from "../interfaces/interface";

interface IProp {
  userDetails: IDetail;
}

const SocialMediaCard: FC<IProp> = ({ userDetails }: IProp) => {
  //Helper Function to get the color of the Social Media Icon

  return (
    <div className="socialDiv">
      <div className="socialMediaDiv">
        <div className="socialDetailsDiv">
          <LocationIcon />
          <p>{userDetails.location ?? "--"}</p>
        </div>
        <div className="socialDetailsDiv">
          <WebsiteIcon />
          <a href={`${userDetails.blog}/` ?? "--"} target="_blank">
            {userDetails.blog ?? "Not Available"}
          </a>
        </div>
      </div>
      <div className="socialMediaDiv">
        <div className="socialDetailsDiv">
          <TwitterIcon />
          <p> {userDetails.twitter_username ?? "Not Available"}</p>
        </div>
        <div className="socialDetailsDiv">
          <CompanyIcon />
          <a
            href={`https://www.github.com/${userDetails.company}`}
            target="_blank"
          >
            @{userDetails.company ?? "--"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
