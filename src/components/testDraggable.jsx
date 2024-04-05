import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { Handle } from '../Item/components/Handle';

import {
  draggable,
  draggableHorizontal,
  draggableVertical,
} from './draggable-svg';
import styles from './Draggable.module.css';


function Draggable(){

    // {
    //     axis,
    //     dragOverlay,
    //     dragging,
    //     handle,
    //     label,
    //     listeners,
    //     transform,
    //     style,
    //     buttonStyle,
    //     ...props
    // },
    // ref
    // ) {
        return (
            <div
            className={classNames(
                styles.Draggable,
                dragOverlay && styles.dragOverlay,
                dragging && styles.dragging,
                handle && styles.handle
                )}
                style={{
                    ...style,
                    '--translate-x': `${transform?.x ?? 0}px`,
                    '--translate-y': `${transform?.y ?? 0}px`,
                }}
                >
        <button
          {...props}
          aria-label="Draggable"
          data-cypress="draggable-item"
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
          style={buttonStyle}
          >
          {axis === 'Vertical'
            ? draggableVertical
            : axis === 'Horizontal'
            ? draggableHorizontal
            : draggable}
          {handle ? <Handle {...(handle ? listeners : {})} /> : null}
        </button>
        {label ? <label>{label}</label> : null}
      </div>
    );
}
// }


export default Draggable;
