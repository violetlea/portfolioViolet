import Navigation from "../layout/Navigation"
import Footer from "../layout/Footer"
import Card from "../layout/Card"
export default function RootPage () {
    return (
    
    <>
        <div className='w-full justify-items-center mt-10 p-4 grid grid-cols-1'>
            <Navigation />
        </div>
        <div className='justify-items-center mt-2 h-full grid grid-cols-1 p-4 md:p-10 w-full'>
            <Card />
        </div>

        <Footer />
    </>
)
}