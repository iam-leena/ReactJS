import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import faker from 'faker'
import CommentDetail from './CommentDetail'
// import App from './App'
// import './index.css'


const App = () => {
  return (
    <div className="ui container comments">

      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        commentText="Wowww! its awesome."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00 AM"
        commentText="Wonderful."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00 PM"
        commentText="Keep going."
        avatar={faker.image.avatar()}
      />

    </div>

  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
