import React, { useState } from 'react'

function Synthetic() {
    const[products]=useState([{Id:1,Name:"tv"},{Id:2,Name:"Mobile"}]);
  return (
    <div className='container-fluid'>
        <h2>Products</h2>
        <table>
            <thead>
                <th>Prodcut id</th>
                <th>Name</th>
            </thead>
            <tbody>
                {
                    products.map(product=>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.Name}</td>
                            <td>
                                <button>
                                    <span className='bi-bi-trash-fill'></span>
                                </button>
                            </td>

                        </tr>
                    )
                }
            </tbody>

        </table>

    </div>
  )
}

export default Synthetic