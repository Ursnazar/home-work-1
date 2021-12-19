import React from 'react';

function FormResponse({ targetAcc }) {
  return (
    <>
      <div className="app-user">
        <div className="app-user__info">
          <div className="app-user__image">
            <img src={targetAcc.avatar_url} alt="avatar_img" />
          </div>
          <div className="app-user__data">
            <h1 className="app-user__name">
              <p>{targetAcc.name}</p>
              <span>{targetAcc.login}</span>
            </h1>
            <p className="app-user__about">{targetAcc.bio}</p>
          </div>
        </div>
        <ul className="app-user__stats">
          <li className="app-user__stats-item">
            <p>Репозитории</p>
            <span>{targetAcc.public_repos}</span>
          </li>
          <li className="app-user__stats-item">
            <p>Подписчиков</p>
            <span>{targetAcc.followers}</span>
          </li>
          <li className="app-user__stats-item">
            <p>Звёзд</p>
            <span>{targetAcc.public_gists}</span>
          </li>
        </ul>
        <ul className="app-user__location">
          <li className="app-user__location-item">{targetAcc.location}</li>
          <li className="app-user__location-item">
            <a href="http://archakov.im">{targetAcc.blog}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FormResponse;
