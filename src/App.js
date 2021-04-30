import './App.css';
import './Comment.css'

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} width="64"></img>
  )
}

function UserInfo(props) {
  return (
    <div className="comment-user">
      <Avatar user={props.user} />
    </div>
  )
}

function Comment(props) {
  return (
    <div className="comment-content">
      <UserInfo user={props.author} />
      <div className="comment-body">
        <div>
          <b className="user-name">{props.author.name}</b>
        </div>
        <p>{props.text}</p>
      </div>
      <span className="date">
        on {formatDate(props.date)}
      </span>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Hi! I am a tiny kitty. I love play with my lity. I love play with my litle toys that my owner bought. I really appreciate that one, thanks man! Hello! I am a tiny kitty. I love play with my lity. I love play with my litle toys that my owner bought. I really appreciate that one, thanks man!',
  author: {
    name: 'Cattyr',
    avatarUrl: 'https://placekitten.com/g/512/512'
  },
}

const comment2 = {
  date: new Date("04/26/2021"),
  text: 'Hi! I also like to play with my toys, eventually I buy more on the store. That was a really good talk man...',
  author: {
    name: 'Kennedy',
    avatarUrl: 'http://placekitten.com/g/300/300'
  },
}

const comment3 = {
  date: new Date("04/26/2021"),
  text: 'Haha you guys are really funny, they really makes me go yes lol!',
  author: {
    name: 'Jucifer',
    avatarUrl: 'http://placekitten.com/g/600/600'
  },
}

function App() {
  return (
    <div className="comment-container">
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Comment
        date={comment2.date}
        text={comment2.text}
        author={comment2.author}
      />
      <Comment
        date={comment3.date}
        text={comment3.text}
        author={comment3.author}
      />
    </div>
  );
}

export default App;
