import React, { FC, useState, ChangeEvent } from "react";
import { IDetail } from "./../interfaces/interface";

interface IProp {
  userDetails: IDetail;
}
const ProfileDetails: FC<IProp> = ({ userDetails }: IProp) => {
  return (
    <div className="profileDetails">
      <div className="profileInfo">
        <p>Repos</p>
        <h4>{userDetails.public_repos}</h4>
      </div>
      <div className="profileInfo">
        <p>Followers</p>
        <h4>{userDetails.followers}</h4>
      </div>
      <div className="profileInfo">
        <p>Following</p>
        <h4>{userDetails.following}</h4>
      </div>
    </div>
  );
};

export default ProfileDetails;
