import React, { Component } from "react";
import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Diego Souza</span>
              <span className="place">Piracicaba, SP</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/1.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comment" />
              <img src={send} alt="Send" />
            </div>

            <strong>60 curtidas</strong>

            <p>
              Um post muito legal da omnistack, criando uma página estilo
              Instagram.
              <span>#top #instagram #rocketseat</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Diego Souza</span>
              <span className="place">Piracicaba, SP</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/1.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comment" />
              <img src={send} alt="Send" />
            </div>

            <strong>60 curtidas</strong>

            <p>
              Um post muito legal da omnistack, criando uma página estilo
              Instagram.
              <span>#top #instagram #rocketseat</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
