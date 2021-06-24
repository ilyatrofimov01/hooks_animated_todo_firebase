import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'


export const Alert = () => {

    const {alert, hide} = useContext(AlertContext)
    console.log(alert.visible)

    return (
    <CSSTransition
        in = {alert.visible}
        timeout = {{
            enter:500,
            exit:300
        }}
        classNames= {'alert'}
        mountOnEnter
        unmountOnExit
    >
        <div className={`alert alert-${alert.warningType || 'warning' } alert-dismissible`}>
            {console.log(alert)}
            <strong>Внимание!</strong>
            {alert.text}

            <button onClick={hide} type="button" className="btn-close" aria-label="Close"></button>
        </div>
    </CSSTransition>
    )
}
