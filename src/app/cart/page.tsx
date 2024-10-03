'use client'

import { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'

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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import Image from 'next/image'

// Mock data for cart items
const initialCartItems = [
    {
        id: 1,
        name: 'T-Shirt',
        price: 19.99,
        quantity: 2,
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 599.99,
        quantity: 1,
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    {
        id: 3,
        name: 'Running Shoes',
        price: 79.99,
        quantity: 1,
        image: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
]

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems)
    const [selectedItems, setSelectedItems] = useState<number[]>(
        initialCartItems.map((item) => item.id)
    )

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity >= 0) {
            setCartItems((items) =>
                items.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            )
        }
    }

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
        setSelectedItems((items) => items.filter((itemId) => itemId !== id))
    }

    const toggleItemSelection = (id: number) => {
        setSelectedItems((items) =>
            items.includes(id)
                ? items.filter((itemId) => itemId !== id)
                : [...items, id]
        )
    }

    const calculateTotal = () => {
        return cartItems
            .filter((item) => selectedItems.includes(item.id))
            .reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const isAllSelected =
        cartItems.length > 0 && selectedItems.length === cartItems.length
    const toggleAllSelection = () => {
        if (isAllSelected) {
            setSelectedItems([])
        } else {
            setSelectedItems(cartItems.map((item) => item.id))
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            {cartItems.length === 0 ? (
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">
                            Your cart is empty.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Card className="mb-8">
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50px]">
                                            <Checkbox
                                                checked={isAllSelected}
                                                onCheckedChange={
                                                    toggleAllSelection
                                                }
                                                aria-label="Select all items"
                                            />
                                        </TableHead>
                                        <TableHead className="w-[100px]">
                                            Image
                                        </TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead className="text-right">
                                            Total
                                        </TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedItems.includes(
                                                        item.id
                                                    )}
                                                    onCheckedChange={() =>
                                                        toggleItemSelection(
                                                            item.id
                                                        )
                                                    }
                                                    aria-label={`Select ${item.name}`}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className="w-16 h-16 relative">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="absolute hover:scale-125 duration-500 object-cover"
                                                        fill
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                ${item.price.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <Input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            updateQuantity(
                                                                item.id,
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                ) || 0
                                                            )
                                                        }
                                                        className="w-16 text-center"
                                                    />
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() =>
                                                        removeItem(item.id)
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <span>
                                    Subtotal ({selectedItems.length} items)
                                </span>
                                <span>${calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between items-center mt-2 text-lg font-bold">
                                <span>Total</span>
                                <span>${calculateTotal().toFixed(2)}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                disabled={selectedItems.length === 0}
                            >
                                Proceed to Checkout ({selectedItems.length}{' '}
                                items)
                            </Button>
                        </CardFooter>
                    </Card>
                </>
            )}
        </div>
    )
}
