import React from 'react'

type PropType = {
    clickHandler :() => void
    copy: string

}

export default  function Button ({clickHandler, copy}: PropType): JSX.Element{
    return (
        <button onClick={clickHandler} >
            {copy}
        </button>
    )
}

