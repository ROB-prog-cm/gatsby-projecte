import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import cx from 'clsx';

function Example(): any {
  const slider = React.useRef(null);

  React.useEffect(() => {
    if (slider.current) {
      const thumb = slider.current?.querySelector('.thumb');
      thumb.onmousedown = function(event) {
        event.preventDefault();

        const shiftX = event.clientX - thumb.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
          let newLeft =
            event.clientX -
            shiftX -
            slider.current?.getBoundingClientRect().left;

          if (newLeft < 0) {
            newLeft = 0;
          }
          const rightEdge = slider.current?.offsetWidth - thumb.offsetWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }

          thumb.style.left = newLeft + 'px';
        }

        function onMouseUp() {
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
        }
      };

      thumb.ondragstart = function() {
        return false;
      };
    }
  }, [slider.current]);

  return (
    <div id="slider" className={cx('slider', styles.slider)} ref={slider}>
      <div className={cx('thumb', styles.thumb)} />
    </div>

    /* const [count, setCount] = useState(0);
  const [check, setCheck] = useState(true);*/
    /* <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}> Нажми на меня </button>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 2)}> Нажми на меня </button>
      <p>Значение - {check.toString()}</p>
      <button onClick={() => setCheck(!check)}> Нажми на меня 2 </button>
    </div>*/
  );
}

export default Example;
