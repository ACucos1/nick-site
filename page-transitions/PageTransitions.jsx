import { createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PageTransitions = ({ route, children }) => {
  const nodeRef = createRef();
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition
          nodeRef={nodeRef}
          key={route}
          classNames='page'
          timeout={250}>
          <div ref={nodeRef} className='transition-component'>
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
