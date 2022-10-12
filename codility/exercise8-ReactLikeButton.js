import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 100,
    liked: false,
  };

  handleClick = () => {
    const likes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    this.setState({ likes, liked: !this.state.liked });
  };

  render() {
    return (
      <>
        <div>
          <button className={this.state.liked ? "like-button liked" : "like-button"} onClick={this.handleClick}>
            Like | <span class="likes-counter">{this.state.likes}</span>
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
