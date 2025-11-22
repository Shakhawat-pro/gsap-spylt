import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
            <Image
                src="/images/nav-logo.svg"
                alt="alt-logo"
                className="object-contain w-20 md:w-24"
                width={0}
                height={0}
            />
        </nav>
    );
};

export default Navbar;



// <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
//     <img src="/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20" />
// </nav>




