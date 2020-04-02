import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    time="Today at 6.00pm"
                    text="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Bob"
                    time="Today at 3.30pm"
                    text="Woohoo"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Ellis"
                    time="Yesterday at 9.45pm"
                    text="Awesome"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))