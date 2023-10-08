

import Footer from '@/app/Footer/Footer';
import Header from '@/app/Header/Header';
import Sobre from '@/app/Sobre/Sobre';

export default function Home() {
  return (
      <main>
          <div className="flex justify-center flex-col">
            <Header/>
            <Sobre/>
            <Footer/>
          </div>
      </main>
    )
}