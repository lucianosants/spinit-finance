import { Container } from '@/src/components';
import { AsideBar, FooterBar, Header } from '@/src/patterns';

type HomeLayoutProps = {
    children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="flex flex-col h-full mx-auto overflow-y-auto font-sans md:py-2 md:pl-4 max-w-screen-2xl md:flex-row">
            <AsideBar />
            <div className="flex-[75%] overflow-y-auto">
                <Header />
                <Container>
                    <div className="px-6 py-4">{children}</div>
                </Container>
            </div>
            <FooterBar />
        </div>
    );
}
