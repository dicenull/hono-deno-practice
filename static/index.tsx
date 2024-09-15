/// <reference lib="DOM" />
import { hc } from 'hono/client';
import { FC, useEffect, useState } from 'hono/jsx';
import { AppType } from '../main.ts';

 export const App: FC = (_) => {
  const [message, setMessage] = useState('aaa')

  const client = hc<AppType>('http://localhost:8000/')

  const fetchApi = async () => {
    console.log('fetching api')
    const res = await client.api.hoge.$get()
    const data = await res.text()
    console.log(data, 'set message')
    setMessage(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return <p>{message}</p>
}

export const Home = () => {
  return (<html>
    <head> 
    </head>
    <body>
      <h1>Hello Hono!</h1>
      <div id='app'></div>
    </body>
  </html>);
}

