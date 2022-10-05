import { useState} from 'react'
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon, Card, DateSelect } from '~/components'
   
   <DateSelect />


export const Profile = () =>(
    <>

        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between">
                <img src="/imgs/logo-vinho.svg" className="w-28 md:w-40"/>
            </div>
        </header>

        <main>
            <section id="header" className="- bg-red-500 text-white ">
                <div className="container max-w-3xl space-y-2 p-4">
                    <a href="/dashboard"></a>
                    <Icon name="back" className="w-10" />
                    <h3 className="text-2xl font-bold"> Wilker Ribeiro</h3>
                </div>    
            </section>

            <section id="content" className="container max-w-3xl p-4 space-y-4">

                <h2 className="text-red-500 text-xl text-bold ">Seus palpites</h2>

                <DateSelect />

                <div className='space-y-4 '>
                <Card
                    timeA={{ slug: 'sui'}}
                    timeB={{ slug: 'cam'}}
                    match={{ time: '7:00'}}
                    />

                <Card
                    timeA={{ slug: 'uru'}}
                    timeB={{ slug: 'cor'}}
                    match={{ time: '7:00'}}
                    />    

                <Card
                    timeA={{ slug: 'por'}}
                    timeB={{ slug: 'gan'}}
                    match={{ time: '7:00'}}
                    />    
                </div>
                        
               
            </section>

        </main>

    </>
)
