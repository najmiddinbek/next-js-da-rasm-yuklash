'use client'

import React from 'react'
import RasmCard from './RasmCard'
import { deletePhoto } from '../../actions/uploadAction'

export default function Rasmlar({ photos }) {
    async function handleDeletePhoto(public_id) {
        await deletePhoto(public_id)
    }

    console.log(photos)

    console.log(photos)
    return (
        <div className='flex gap-3 items-center'>
            {photos.map(photo => (
                <>
                    <RasmCard key={photo?.public_id} url={photo?.secure_url} onClick={() => handleDeletePhoto(photo?.public_id)} />
                </>
            ))}

        </div>
    )
}
