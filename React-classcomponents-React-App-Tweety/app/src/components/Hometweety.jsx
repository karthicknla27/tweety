import React from "react";

function Hometweety() {
  return (
    <div>
      <div>
        <div className="search">
          <input type="text" placeholder="Search here ...." />
          <button className="Search-btn">Search</button>
        </div>
        <div className="tweet-parent"></div>
        <div className="tweet-container">
          <div className="tweet-list-title">
            <h2>
              List of <span className="tweet-list">Tweet</span>
            </h2>
          </div>
          <div className="tweet-records">
            <div className="card">
              <p>hii this is karthick</p>
              <div className="emoji-head">
                <div className="emoji">
                  <span className="like">&#128077;</span>
                  <span>&#128078;</span>
                </div>
                <div className="date">9 oct 2023 , 12:00am</div>
              </div>
            </div>
            <div className="card">
              <p>hii this is karthick</p>
              <div className="emoji-head">
                <div className="emoji">
                  <span>&#128077;</span>
                  <span>&#128078;</span>
                </div>
                <div className="date">9 oct 2023 , 12:00am</div>
              </div>
            </div>
            <div className="card">
              <p>hii this is karthick</p>
              <div className="emoji-head">
                <div className="emoji">
                  <span className="like">&#128077;</span>
                  <span>&#128078;</span>
                </div>
                <div className="date">9 oct 2023 , 12:00am</div>
              </div>
            </div>
            <div className="card">
              <p>hii this is karthick</p>
              <div className="emoji-head">
                <div className="emoji">
                  <span>&#128077;</span>
                  <span className="like">&#128078;</span>
                </div>
                <div className="date">9 oct 2023 , 12:00am</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hometweety;
