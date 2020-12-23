import React from 'react';
import PostChannel from './components/post_channel'
import './App.css';

function App() {
  // const [posts, setPosts] = useState([]);
  // const [newPost, setNewPost] = useState('');

  // useEffect(() => {
  //   socketClient.onopen = (event) => {
  //     const message = {
  //       command: "subscribe",
  //       identifier: JSON.stringify({ channel: "PostChannel" }),
  //     }
  //     socketClient.send(JSON.stringify(message))
  //   };

  //   socketClient.onmessage = (event) => {
  //     let serverResponse = JSON.parse(event.data);

  //     if (serverResponse.type === 'ping') return;

  //     const data  = serverResponse.message;

  //     if(data && data.type === 'all_posts') {
  //       setPosts(data.post_history);
  //       // console.log(data)
  //     }
  //     if(data && data.type === 'new_post') {
  //       const incomingPost = data.post
  //       setPosts((prevPosts) => [...prevPosts, incomingPost]);
  //       // console.log(data)
  //     }
  //   };
  // }, []);

  // const sendPost = (e) => {
  //   e.preventDefault();
  //   const message = {
  //     command: "message",
  //     identifier: JSON.stringify({ channel: "PostChannel" }),
  //     data: JSON.stringify({
  //       action: 'send_post',
  //       content: newPost,
  //       user_id: 1,
  //       chatroom_id: 1,
  //     })
  //   }
  //   socketClient.send(JSON.stringify(message))
  //   // console.log('activity sent', newPost)
  // }


  return (
    <div className="App">
      <PostChannel />
      
    </div>
  );
}

export default App;
