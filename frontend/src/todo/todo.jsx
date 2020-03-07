import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state =                {description: '', list: [] }
        this.handleAdd =            this.handleAdd.bind(this)
        this.handleChange =         this.handleChange.bind(this)        
        this.handleRemove =         this.handleRemove.bind(this)
        this.handleMarkAsDone =     this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending =  this.handleMarkAsPending.bind(this)
        this.handleSearch=          this.handleSearch.bind(this)
        this.handleClear=          this.handleClear.bind(this)
        this.refresh()
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description))
        .catch(() => { console.log('Error to recover data.') })
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/`: ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))
        .catch(() => { console.log('Error to recover data.') })
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
        .then(resp => this.refresh())
        .catch(() => { console.log('Error to recover data.') })
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
        .then(resp => this.refresh(this.state.description))
        .catch(() => { console.log('Error to recover data.') })
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => this.refresh(this.state.description))
        .catch(() => { console.log('Error to recover data.') })
    }

    handleClear(){
        this.refresh()
    }
  

    render(){
        return (
            <div>
                <PageHeader name='Tasks' small='Record'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}   />
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsDone={this.handleMarkAsDone}
                 />

            </div>
        )
    }
}