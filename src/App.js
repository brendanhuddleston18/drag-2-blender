import React, { useState } from 'react';
import { DndContext, useDndMonitor } from '@dnd-kit/core';
import { DraggableStory } from '@dnd-kit/core'
import { Droppable } from './components/Droppable';
import { Draggable } from './components/Draggable';
import blenderimg from './img/blenderimg.jpeg';


export default function App() {
  const [parent, setParent] = useState(null);
  const [ingredientsShown, setIngredientsShown] = useState(['strawberries', 'bananas', 'spinach', 'kale']);
  const [blender, setBlender] = useState([]);
  const ingredients = ['strawberries', 'bananas', 'spinach', 'kale'];


  const draggableItems = ingredientsShown.map((ingredient, index) => (
    <Draggable ingredientName={ingredient} key={`draggable-${index}`} id={ingredient}>
      {ingredient}
    </Draggable>
  ));

  const itemsInBlender = blender.map(ingredient => <li key={ingredient}>{ingredient}</li>)


  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
    setBlender([...blender, event.active.id]);
    setIngredientsShown(ingredientsShown.filter(ingredient => ingredient !== event.active.id))
    console.log(event.active.id)
  }

  function showIngredients(){
    console.log(ingredientsShown)
    console.log(blender)
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>

    <DndContext onDragEnd={handleDragEnd}>

      {draggableItems}
     
      
      <Droppable id="droppable">
        <div style={{backgroundImage: `url(${blenderimg})`, height: '500px', width: '500px'}}><ul>{itemsInBlender}</ul></div>
    
      </Droppable>
    </DndContext>
  </div>
);
};