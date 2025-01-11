import Image from "next/image";
import React from "react";

const users = [
  {
    name: "Ece Şahin",
    position: "İyi günler,Yarın ki rezer ",
    imageUrl: "/images/testimonials/png-avatar.png",
    notificationStatus: "online",
  },
  {
    name: "Yiğit Uslu",
    position: "Villa Lisburn'de yeterli",
    imageUrl: "/images/testimonials/png-transparent.png",
    notificationStatus: "none",
  },
  {
    name: "Murat Doğan",
    position: "Merhaba",
    imageUrl: "/images/testimonials/png-transparent.png",
    notificationStatus: "away",
  },
  {
    name: "Kerim Gönen",
    position: "Villa Marsilya'nın tam k",
    imageUrl: "/images/testimonials/png-transparent.png",
    notificationStatus: "busy",
  },
  {
    name: "Yeliz Günay",
    position: "Merhaba,İyi çalışmalar",
    imageUrl: "/images/testimonials/png-avatar.png",
  },


];

const UserItem = ({ user }) => {
  return (
    <div className="list-item">
      <a href="#">
        <div className="d-flex align-items-center position-relative">
          <Image
            width={50}
            height={50}
            className="img-fluid float-start rounded-circle mr10"
            src={user.imageUrl}
            alt={`${user.name}'s profile`}
          />
          <div className="d-sm-flex">
            <div className="d-inline-block">
              <div className="fz14 fw600 dark-color ff-heading mb-0">
                {user.name}
              </div>
              <p className="preview">{user.position}</p>
            </div>

            <div className="iul_notific">
              {user.notificationStatus !== undefined && (
                <div className={`m_notif ${user.notificationStatus}`}>2</div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const UserInboxList = () => {
  return (
    <>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </>
  );
};

export default UserInboxList;
