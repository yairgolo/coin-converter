import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';


function Header() {
    return <header>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
            <h1>🪙 Coin Converter 🪙</h1>
        </Link>
    </header>
}

function SideBar() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://api.vatcomply.com/currencies')
            .then(res => res.json())
            .then(obj => setList(Object.entries(obj).map(([key, value])=>({id: key, ...value})))).catch(() => <h3>ERROR</h3>);
    }, []);

    return <div className="sidebar">
        {list.length ? list.map((item, i) => <Link key={i} to={`/${item.id}`}>
            {item.name}
        </Link>) : <span>Loading...</span>}
    </div>
}

export function Home() {
    return <img src="https://cf.ltkcdn.net/home/antiques-collectibles/images/std-lg/343517-1200x800-old-coins-636151976.webp" alt="" />
}


export default function Layout() {
    return <div className='cont'>
        <Header />
        <SideBar />
        <Outlet />
    </div>;
}