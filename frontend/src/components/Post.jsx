// Responsible for dipslaying an individual post
const Post = ({ post }) => {
  const timeParser = (time) => {
    return new Date(time).toLocaleTimeString();
  };

  // destructuring the post
  // console.log(post);
  let user, msg, username, avatar;
  [user, msg] = post;

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          {/* Check if avatar exists */}
          {user[1] == null ? (
            <img
              alt=""
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          ) : (
            <img alt="" src={user[1]} />
          )}
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{user[0]}</strong> <small>@{user[0]} </small>
            <small>{timeParser(msg.created_at)}</small>
            <br />
            {msg.content}
            {/* <strong>John Smith</strong> <small>@johnsmith</small> */}
            {/* <small>31m</small> */}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis. */}
          </p>
        </div>
        {/* <nav className="level is-mobile">
          <div className="level-left">
            <button className="level-item">
              <span className="icon is-small">
                <i className="fas fa-reply"></i>
              </span>
            </button>
            <button className="level-item">
              <span className="icon is-small">
                <i className="fas fa-retweet"></i>
              </span>
            </button>
            <button className="level-item">
              <span className="icon is-small">
                <i className="fas fa-heart"></i>
              </span>
            </button>
          </div>
        </nav> */}
      </div>
      <div className="media-right">
        <button className="delete"></button>
      </div>
    </article>
  );
};

export default Post;
