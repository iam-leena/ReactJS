import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
// import App from './App'
// import './index.css'


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>
            Warning!!
          </h3>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          commentText="Wowww! its awesome."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>


      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00 AM"
          commentText="Wonderful."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00 PM"
          commentText="Keep going."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>

  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
