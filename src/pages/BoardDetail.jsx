import React from 'react'
import { useParams } from 'react-router-dom'

const BoardDetail = () => {
    const {id} = useParams()

    return (
        <section>{id}의 BoardDetail페이지</section>
    )
}

export default BoardDetail