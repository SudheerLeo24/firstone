import React from 'react'




function databinding() {
  return (
    <div>
        <h2>Choose Styles</h2>
        <dl>
            <dt>Background color</dt>
            <dd>
                <select>
                    <option > Yellow</option>
                    <option > Red</option>
                    <option > Black</option>
                </select>
            </dd>
            <dt>Text align</dt>
            <dd>
                <select >
                    <option >
                        left
                    </option>
                    <option >Right</option>
                </select>
            </dd>
        </dl>
        <h1>Sudheer Babu</h1>
    </div>
  )
}

export default databinding