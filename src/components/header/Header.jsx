import profile from '../../../images/author/istockphoto-1362723536-1024x1024.jpg'
const Header = () => {
    return (
        <header className='container mx-auto flex justify-between items-center border-b-2 pb-4'>
            <h1 className='text-6xl bg-red-300'> Knowledge Cafe </h1>
            <div className='w-12'>
                 <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;