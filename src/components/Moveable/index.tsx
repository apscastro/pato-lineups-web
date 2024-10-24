import React, { useRef, useEffect, useState } from 'react';

import Draggable, {DraggableCore} from "react-draggable";
import Player from '../TeamPlayer';

interface MoveableProps {
  bounds: { left: number; top: number; right: number; bottom: number }
}

const Moveable: React.FC<MoveableProps> = ( {bounds}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  /*const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (nodeRef.current) {
      const { left, top } = nodeRef.current.getBoundingClientRect();
      setInitialPosition({ x: left, y: top });
    }
  }, []);*/

  return (
    <Draggable nodeRef={nodeRef} /*bounds={bounds} defaultPosition={initialPosition}*/>
      <div ref={nodeRef}>
        <Player />
      </div>
    </Draggable>
  );
};

export default Moveable;
