import { Navbar } from './Navbar';

export function FooterBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full px-6 py-2 mx-auto border border-default md:hidden">
            <Navbar />
        </div>
    );
}
