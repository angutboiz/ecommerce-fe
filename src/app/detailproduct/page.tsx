'use client'

import { useState } from 'react'
import {
    Star,
    ShoppingCart,
    Heart,
    Truck,
    Timer,
    ArrowLeftRight,
    Ticket,
    ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

// Mock product data
const product = {
    id: 1,
    name: 'Váy Thun Nữ Dáng Rộng Phố Tay Madrid',
    price: 29.99,
    description:
        'Sợi compact có độ bền gấp 3 lần cotton thường. Thấm hút mồ hôi cực tốt, thoáng mát thích hợp với thời tiết nóng ẩm của Việt Nam. Co giãn tốt, thích hợp với chuyển động của cơ thể khi hoạt động. Hình in ở ngực áo MADRID năng động, cá tính.',
    rating: 4.5,
    reviews: 128,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    images: [
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-6-75da344e-8e41-48db-9062-17bd7af4bbd1.jpg',
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-7.jpg',
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-8.jpg',
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-9.jpg',
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-1.jpg',
        'https://m.yodycdn.com/fit-in/filters:format(webp)/products/vtn6014-dtv-10.jpg',
    ],
    details:
        'Sợi compact có độ bền gấp 3 lần cotton thường. Thấm hút mồ hôi cực tốt, thoáng mát thích hợp với thời tiết nóng ẩm của Việt Nam. Co giãn tốt, thích hợp với chuyển động của cơ thể khi hoạt động. Hình in ở ngực áo MADRID năng động, cá tính.',
}

export default function ProductDetailPage() {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [mainImage, setMainImage] = useState(product.images[0])

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="aspect-square overflow-hidden rounded-lg relative">
                        <Image
                            src={mainImage}
                            alt={product.name}
                            className="absolute hover:scale-125 duration-500 object-cover"
                            fill
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none relative"
                                onClick={() => setMainImage(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} thumbnail ${
                                        index + 1
                                    }`}
                                    className="absolute hover:scale-125 duration-500 object-cover"
                                    fill
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <div className="flex items-center mt-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${
                                            i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                                {product.reviews} reviews
                            </span>
                        </div>
                    </div>
                    <div className="text-2xl font-bold">
                        ${product.price.toFixed(2)}
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">
                            Select Size
                        </h2>
                        <RadioGroup
                            value={selectedSize}
                            onValueChange={setSelectedSize}
                            className="flex flex-wrap gap-2"
                        >
                            {product.sizes.map((size) => (
                                <div key={size}>
                                    <RadioGroupItem
                                        value={size}
                                        id={`size-${size}`}
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor={`size-${size}`}
                                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        {size}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">
                            Select Color
                        </h2>
                        <RadioGroup
                            value={selectedColor}
                            onValueChange={setSelectedColor}
                            className="flex flex-wrap gap-2"
                        >
                            {product.colors.map((color) => (
                                <div key={color}>
                                    <RadioGroupItem
                                        value={color}
                                        id={`color-${color}`}
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor={`color-${color}`}
                                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        {color}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="flex space-x-4">
                        <Button className="flex-1">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to
                            Cart
                        </Button>
                        <Button variant="outline">
                            <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                        </Button>
                    </div>
                    <div className="">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li className="flex gap-3 items-center">
                                <Truck size={18} />
                                <p>
                                    <b>Miễn phí vận chuyển:</b> Đơn hàng từ 498k
                                </p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Timer size={18} />
                                <p>
                                    <b>Giao hàng</b> Từ 3 - 5 ngày trên cả nước
                                </p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <ArrowLeftRight size={18} />
                                <p>
                                    <b>Miễn phí đổi trả:</b> Tại 267+ cửa hàng
                                    trong 15 ngày
                                </p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Ticket size={18} />
                                <p>Sử dụng mã giảm giá ở bước thanh toán</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <ShieldCheck size={18} />
                                <p>Thông tin bảo mật và mã hoá</p>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <p>{product.details}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
