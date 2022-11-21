import React, { useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import Modal from './Modal/Modal'

const Home = () => {

    return (
        <div className='container'>
            <h2 className='home-title'>To do list</h2>
            <div className='row'>
                <Form />
                <List />
                <Modal />
            </div>
        </div>
    )
}

export default Home