import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import styles from '../styles/draggable.css';


export function Draggable(props) {
  
  const doThings = () => {
    props.handleDragStart(props.ingredientName)
  };
  
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    onDragStart: doThings,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  

  return (
    <button className="ingredient-button" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}