import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    CreditCard,
    LogOut,
    Settings,
    User,
    Search,
    ShoppingCart,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
export default function Header() {
    const isLogin = false
    return (
        <header className="sticky top-0 z-10 bg-white border-b">
            <div className="">
                <div className="container py-4 flex items-center justify-between gap-3">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        ShopNow
                    </Link>
                    <form className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 w-full"
                            />
                        </div>
                    </form>
                    <div className="flex items-center space-x-4">
                        <Link href="/cart">
                            <Button variant="outline" size="icon">
                                <ShoppingCart className="h-4 w-4" />
                                <span className="sr-only">Cart</span>
                            </Button>
                        </Link>
                        {isLogin ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage
                                            width={35}
                                            height={35}
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                            className="rounded-full"
                                        />
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                            <DropdownMenuShortcut>
                                                ⇧⌘P
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Billing</span>
                                            <DropdownMenuShortcut>
                                                ⌘B
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                            <DropdownMenuShortcut>
                                                ⌘S
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/login">
                                <Button>Login</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
