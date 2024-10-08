import { useEffect, useRef } from 'react';
const useKeyframes = (keyframesFunction) => {
  const node = useRef(null);
  useEffect(() => {
    if (!node.current) return;
    const { keyframes, config } = keyframesFunction();
    const animation = node.current.animate(keyframes, config);
    return () => {
      animation.cancel();
    };
  }, [keyframesFunction]);
  return node;
};
export{
    useKeyframes
}