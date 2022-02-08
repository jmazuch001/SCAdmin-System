import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StepSystem from '../pages/home/StepSystem'
import { Divider, Image, Segment, Item, Grid, Rail } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import { useState, useEffect } from 'react'

// styles
import styles from './BottomNavbar.module.css'

export default function AddRemoveFields() {
    const [formInput, setFormInput] = useState([
        { newMineral: '', newMineralQuant: ''}
      ])
      
      // subform - mineral details add / remove
      const handleChangeFormInput = (index, event) => {
        const values = [...formInput];
        values[index][event.target.name] = event.target.value;
        setFormInput(values);
        console.log(index, event.target.newMineral)
      }
      
      const handleAddFormInput = () => {
        setFormInput([...formInput, { newMineral: '', newMineralQuant: ''}])
      }
      
      const handleRemoveFormInput = (index) => {
        const values = [...formInput]
        values.splice(index, 1);
        setFormInput(values);
      }


    return (
        <div>
            { formInput.map((formInput, index) => (
                <div key={index}>
                    {/* <Select
                    onChange={(e) => setNewMinerals(e)} options={newMinerals} isMulti
                    /> */}
                    <input className='detail-content'
                              
                    label='Mineral Details'
                    placeholder='Mineral Name'
                    variant='filled'
                    type='text'
                    value={formInput.newMineral}
                    onChange={event => handleChangeFormInput(index, event)}/>
                    <input className='detail-content'
                              
                    type='text'
                    label='Mineral Quantity'
                    placeholder='Mineral Quantity'
                    value={formInput.newMineralQuant}
                    onChange={event => handleChangeFormInput(index, event)}/>
                    <Button.Group>
                    <Button
                        onClick={() => handleRemoveFormInput()}
                        >Remove</Button>
                    <Button.Or />
                        <Button
                        onClick={() => handleAddFormInput()}
                        >Add</Button>
                        </Button.Group>
                          </div>
                        ))}
        
        </div>
        
    ) 
}