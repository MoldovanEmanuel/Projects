import React from 'react'

function NameList() {
        const names = ['Bruce', 'Clark', 'Daiana']
        const nameList = names.map(nume => <h2>{nume}</h2>)
    return (
        <div>
            {
             nameList
            //  const nameList = names.map(nume => <h2>{nume}</h2>) //declared with constant or wite it here 
            }

            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
