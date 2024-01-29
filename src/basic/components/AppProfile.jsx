import React from 'react';
import Avartar from './Avartar';
import Profile from './Profile';
import './App.css'

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨');
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avartar image='https://plus.unsplash.com/premium_photo-1703717962158-39a06ef6e6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      isNew= { true }/>
      <Profile image='https://plus.unsplash.com/premium_photo-1703717962158-39a06ef6e6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='james Kim'
      alt='하트'
      isNew= { true }
      title='프론트 엔드'/>
      <Profile image='https://plus.unsplash.com/premium_photo-1703717962158-39a06ef6e6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='james Kim'
      alt='하트'
      title='프론트 엔드'/>
      <Profile image='https://plus.unsplash.com/premium_photo-1703717962158-39a06ef6e6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='james Kim'
      alt='하트'
      title='프론트 엔드'/>
    </div>
  );
}