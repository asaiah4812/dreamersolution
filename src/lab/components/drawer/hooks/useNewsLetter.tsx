'use client'

import { useState } from 'react'

export interface ClientData {
  email: string
}

export default function useNewsLetter(): [
  (data: ClientData) => void,
  ClientData | null
] {
  const [clientData, setClientData] = useState<ClientData | null>(null)

  const sendNewsletter = async (data: ClientData) => {
    try {
      // Here you would typically make an API call to your backend
      // For this example, we'll just simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Newsletter subscription sent:', data)
      setClientData(data)
      
      // You might want to show a success message to the user here
    } catch (error) {
      console.error('Error sending newsletter subscription:', error)
      // You might want to show an error message to the user here
    }
  }

  return [sendNewsletter, clientData]
}