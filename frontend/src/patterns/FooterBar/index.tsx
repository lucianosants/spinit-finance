import { Navbar } from '../Navbar';

export function FooterBar() {
    return (
        <div className="flex items-center justify-center w-full h-16 px-6 py-2 mx-auto border bg-gray-950/40 backdrop-blur-md border-default md:hidden">
            <Navbar />
        </div>
    );
}
