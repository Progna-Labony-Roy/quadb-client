import React from 'react';
import { useQuery } from 'react-query';
import Card from '../Card/Card';
import './Cards.css'
import Loader from './Loader';

const Cards = () => {
    const { data: movies =[] ,isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
          const result = await fetch("https://quadb-server.vercel.app/movies");
          const data = await result.json();
          return data;
        },
      });
      
if(isLoading){
    return <Loader></Loader>
}
    
    return (
       <div>
         <div className='main-div grid gap-5 lg:grid-cols-3'>
            {
                movies?.map(info => <Card info={info} key={info?.show?.id} ></Card>)
            }
        </div>
       </div>
    );
};

export default Cards;