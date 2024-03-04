
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './Tasks/TaskList';
import AddTask from './Tasks/AddTask';
import Laout from './common/Layout';
import PostList from './Posts/PostsList';
import AddPost from './Posts/AddPost';
import UsersList from './Users/UsersList';
import AddUser from './Users/AddUser';
import PhotosList from './Photos/PhotosList';
import AddPhoto from './Photos/AddPhoto';
import HomePage from './HomePage';
import UpdateTask from './Tasks/UpdateTask';
import UpdateUser from './Users/UpdateUser';
import UpdatePost from './Posts/UpdatePost';
import UpdatePhoto from './Photos/UpdatePhoto';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Laout />} >
            <Route index element={<HomePage/>}/>
            <Route path='/tasks' element={<TaskList />} />
            <Route path='/tasks/add' element={<AddTask />} />
            <Route path='/tasks/update/:id' element={<UpdateTask/>} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/posts/add' element={<AddPost />} />
            <Route path='/posts/update/:id' element={<UpdatePost/>} />
            <Route path='/users' element={<UsersList />} />
            <Route path='/users/add' element={<AddUser />} />
            <Route path='/users/update/:id' element={<UpdateUser/>} />
            <Route path='/photos' element={<PhotosList />} />
            <Route path='/photos/add' element={<AddPhoto />} />
            <Route path='/photos/update/:id' element={<UpdatePhoto/>} /></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
