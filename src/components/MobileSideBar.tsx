import Link from 'next/link';
import { AlignJustify, ChartNetwork, Home } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

export const MobileSideBar = () => {
  return (
    <div className="sidebarMobile">
        <div className="sidebarMobile-container">
            <header className="header-siderBar">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden">
                            <AlignJustify />
                            <span className="sr-only">abrir / fechar</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="sm:max-w-x">
                        <nav className="nav-sidebarMobile">
                            <Link href="#" className="flex h-10 w-10">
                                <ChartNetwork className="h-5 w-5 transition-all"/>
                            </Link>

                            <Link href="/" className="link-sidebarMobile text-muted-foreground houver:text-foreground">
                                <Home className="h-5 w-5 transition-all"/> Inicio
                            </Link>

                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    </div>
  )
}
