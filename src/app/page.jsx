import UploadForm from '@/components/UploadForm'
import React from 'react'
import { getAllPhotos } from '../../actions/uploadAction'
import Rasmlar from '@/components/Rasmlar'

export default async function Home() {
  const photos = await getAllPhotos()


  return (
    <>
      <h1>Next js da rasm yuklash</h1>
      <UploadForm />

      <h1>Barcha rasmlar</h1>
      <Rasmlar photos={photos || []} />
    </>
  )
}
