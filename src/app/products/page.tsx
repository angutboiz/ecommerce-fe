'use client'

import { useState } from 'react'
import { Filter, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for categories and products
const categories = [
    { id: 'clothing', name: 'Clothing' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'books', name: 'Books' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'sports', name: 'Sports & Outdoors' },
]

const products = [
    {
        id: 1,
        name: 'T-Shirt',
        price: 19.99,
        category: 'clothing',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 599.99,
        category: 'electronics',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 3,
        name: 'Novel',
        price: 9.99,
        category: 'books',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 4,
        name: 'Plant Pot',
        price: 14.99,
        category: 'home',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 5,
        name: 'Running Shoes',
        price: 79.99,
        category: 'sports',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 6,
        name: 'Laptop',
        price: 999.99,
        category: 'electronics',
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
]

export default function ProductPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = products.filter(
        (product) =>
            (selectedCategories.length === 0 ||
                selectedCategories.includes(product.category)) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const CategoryFilter = () => (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() =>
                            handleCategoryChange(category.id)
                        }
                    />
                    <Label htmlFor={category.id}>{category.name}</Label>
                </div>
            ))}
        </div>
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 hidden md:block">
                    <CategoryFilter />
                </aside>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="md:hidden mb-4">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Categories</SheetTitle>
                            <SheetDescription>
                                Filter products by category
                            </SheetDescription>
                        </SheetHeader>
                        <div className="mt-4">
                            <CategoryFilter />
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="flex-1">
                    <div className="mb-6">
                        <Input
                            type="search"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Card key={product.id}>
                                <CardHeader>
                                    <Link
                                        href="/detailproduct"
                                        className="w-full h-48 relative block"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute hover:scale-125 duration-500 object-cover"
                                            fill
                                        />
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{product.name}</CardTitle>
                                    <p className="text-muted-foreground">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/cart">
                                        <Button className="w-full">
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            Add to Cart
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <p className="text-center text-muted-foreground mt-8">
                            No products found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
