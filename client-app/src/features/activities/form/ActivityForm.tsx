import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity : Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void
    submitting: boolean;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit, submitting} : Props){
   
   const initialState = selectedActivity ?? { 
       id: '',
       tittle: '',
       category: '',
       description: '',
       date: '',
       city: '',
       venue: ''
   }

   const [activity, setActivity] = useState(initialState);

function handleSubmint() {
    createOrEdit(activity);
}

function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
}

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmint} autoComplete='off'>
                <Form.Input placeholder='Tittle' value={activity.tittle} name='tittle' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}