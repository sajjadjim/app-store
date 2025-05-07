import React, { useEffect, useState } from 'react'
import CaroselAppPage from './CaroselAppPage'
import { useLoaderData } from 'react-router'
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from 'react-router';
function AppPages() {
    // Fetch the all app Data Here 
    const data = useLoaderData()
    // console.log(data)

    // trending app Find Here----------------- Trending APpp Filter by Rating 5 base 
    const [trendApp, setTrendApp] = useState([])
    useEffect(() => {
        if (data && Array.isArray(data)) {
            const trendingApp = data.filter(app => app.rating === 5);
            setTrendApp(trendingApp)
        }
    }, [data])
    // social app section here 
    const [socialApp, setSocialApp] = useState([])
    useEffect(() => {
        if (data && Array.isArray(data)) {
            const SocilaApp = data.filter(app => app.category === "Social");
            setSocialApp(SocilaApp)
        }
    }, [data])
// console.log(socialApp)

    // Games app section here 
    const [gameApp, setGameApp] = useState([])
    useEffect(() => {
        if (data && Array.isArray(data)) {
            const GameApp = data.filter(app => app.category === "Games");
            setGameApp(GameApp)
        }
    }, [data])
// console.log(gameApp)

    // Educational Apps app section here 
    const [educationalApp, setEducationalApp] = useState([])
    useEffect(() => {
        if (data && Array.isArray(data)) {
            const EducationApp = data.filter(app => app.category === "Education");
            setEducationalApp(EducationApp)
        }
    }, [data])
    // Productivity Apps app section here 
    const [productivityApp, setProductivityApp] = useState([])
    useEffect(() => {
        if (data && Array.isArray(data)) {
            const ProductiveApp = data.filter(app => app.category === "Productivity");
            setProductivityApp(ProductiveApp)
        }
    }, [data])

    return (
        <div>
            <CaroselAppPage></CaroselAppPage>
            <main className='w-11/12 mx-auto'>
                {/* trensding app show here  */}
                <div>
                    <h1 className='font-bold text-xl'>Trending App</h1>
                    <div className='grid md:grid-cols-7 grid-cols-3 justify-between my-2'>
                        {
                            trendApp.map((app, index) => <div key={index} >
                                <Link to={`/app-details/${app.id}`}>
                                <img className='rounded-2xl h-30 w-30' src={app.banner} alt="trendsAPp" />
                                <p className='font-bold text-lg'>{app.name}</p>
                                <p>{app.developer}</p>
                                </Link>
                            </div>)
                        }
                    </div>

                </div>
                 {/* Social app show here  */}
                 <div className='my-10'>
                    <h1 className='font-bold text-xl'>Social App</h1>
                    <div className='grid md:grid-cols-7 grid-cols-3  justify-between my-2'>
                        {
                            socialApp.map((app, index) => <div key={index}>
                                <Link to={`/app-details/${app.id}`}>
                                <img className='rounded-2xl h-30 w-30' src={app.banner} alt="trendsAPp" />
                                <p className='font-bold text-lg'>{app.name}</p>
                                <p>{app.developer}</p>
                                <p className='flex gap-1 items-center'>{app.rating}<TiStarFullOutline></TiStarFullOutline></p>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
                 {/* Social app show here  */}
                 <div className='my-10'>
                    <h1 className='font-bold text-xl'>Social App</h1>
                    <div className='grid md:grid-cols-7 grid-cols-3 justify-between my-2'>
                        {
                            gameApp.map((app, index) => <div key={index}>
                                <Link to={`/app-details/${app.id}`}>
                                <img className='rounded-2xl h-30 w-30' src={app.banner} alt="trendsAPp" />
                                <p className='font-bold text-lg'>{app.name}</p>
                                <p>{app.developer}</p>
                                <p className='flex gap-1 items-center'>{app.rating}<TiStarFullOutline></TiStarFullOutline></p>
                                </Link></div>)
                        }
                    </div>
                </div>
                                 {/* Educational app show here  */}
                                 <div className='my-10'>
                    <h1 className='font-bold text-xl'>Educational App</h1>
                    <div className='grid md:grid-cols-7 grid-cols-3   my-2'>
                        {
                            educationalApp.map((app, index) => <div key={index}>
                                <Link to={`/app-details/${app.id}`}>
                                <img className='rounded-2xl h-30 w-30' src={app.banner} alt="trendsAPp" />
                                <p className='font-bold text-lg'>{app.name}</p>
                                <p>{app.developer}</p>
                                <p className='flex gap-1 items-center'>{app.rating}<TiStarFullOutline></TiStarFullOutline></p>
                            </Link></div>)
                        }
                    </div>
                </div>
                {/* Productivity app show here  */}
                <div className='my-10'>
                    <h1 className='font-bold text-xl'>Educational App</h1>
                    <div className='grid md:grid-cols-7 grid-cols-3  justify-between my-2'>
                        {
                            productivityApp.map((app, index) => <div key={index}>
                               <Link to={`/app-details/${app.id}`}> <img className='rounded-2xl h-30 w-30' src={app.banner} alt="trendsAPp" />
                                <p className='font-bold text-lg'>{app.name}</p>
                                <p>{app.developer}</p>
                                <p className='flex gap-1 items-center'>{app.rating}<TiStarFullOutline></TiStarFullOutline></p>
                                </Link></div>)
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AppPages
