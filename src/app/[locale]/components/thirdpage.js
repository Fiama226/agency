import './thirdpage.css'
import Ballpit from './Ballpit'
import { useTranslations } from 'next-intl';



function Thirdpage() {
    const t = useTranslations('thirdPage');

    return (
        <div className="relative overflow-hidden text-white h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-700 to-white-600">
            <div className='snow w-screen ' ></div>

            <Ballpit
                count={50}
                gravity={0.7}
                friction={0.8}
                wallBounce={0.95}
                followCursor={true}
                className="absolute z-10 w-full"
                colors={["red", "yellow", "green"]}
            />


            <p className='text-3xl text-center md:text-8xl p-3 font-extrabold'>
                {t("title")}

            </p>
            <p className='text-2xl m-6 md:m-20 md:text-4xl'>
                {t("description")}

            </p>

        </div>

    )
}

export default Thirdpage