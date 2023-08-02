import { Container } from '@/src/components';
import { AsideBar, FooterBar, Header } from '@/src/patterns';

type HomeLayoutProps = {
    children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="flex flex-col h-screen px-4 py-2 mx-auto overflow-hidden font-sans max-w-screen-2xl md:flex-row">
            <AsideBar />
            <div className="flex-[80%]">
                <Header />
                <Container>{children}</Container>
                <FooterBar />
            </div>
        </div>
    );
}
