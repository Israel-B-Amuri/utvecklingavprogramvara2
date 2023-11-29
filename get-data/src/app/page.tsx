import Login from '@/app/Components/Login'

export default function Home() {
  async function fetchData(){
    const res = await fetch('http://10.111.3.78:3001/api/products')
    const data = await res.json()
    //console.log(data)
  

  }
  fetchData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login></Login>
    </main>
  )
}
