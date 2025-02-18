import Link from 'next/link';
import { ChartNetwork, ShoppingBasket } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export const SideBar = () => {
    return(
        <aside className="sideBar">
            <nav className="flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                    <Link href="/" className="link-sideBar">
                        <ChartNetwork className="h-5 w-5 transition-all"/>
                    </Link>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/" className="link-sideBar text-muted-foreground transition-colors hover:foreground">
                                <ShoppingBasket className="h-5 w-5 transition-all"/>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>Pedidos</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>

        </aside>
    )

}