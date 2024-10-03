'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    const products = [
        {
            id: 1,
            name: 'Tai nghe bluetooth JBL TNC tune 230, Tai nghe không dây thể thao JBL - Thiết kế thông minh',
            price: 450000,
            count_sell: Math.floor(Math.random() * 1000),
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzucdxjt0ejl14.webp',
        },
        {
            id: 2,
            name: 'Áo sơ mi nam nữ tay ngắn chất kaki cao cấp kiểu dáng form rộng, unisex, dễ phối đồ mặc cực đẹp',
            price: 134000,
            count_sell: Math.floor(Math.random() * 1000),
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyrm278oi1ql74.webp',
        },
        {
            id: 3,
            name: 'Quần Dài Kaki Dáng Baggy Ống Suông Cạp Chun Unisex Nam Nữ , Quần Tây Âu Vải Kaki Mềm Mại PN STORE QBK',
            price: 119000,
            count_sell: Math.floor(Math.random() * 1000),
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0jq4a8ekaul22.webp',
        },
        {
            id: 4,
            name: 'Máy Cạo Râu mini Enchen Mini 6 Enchen MS003- Đầu cắt từ tính Hệ thống ESM thông minh Thiết kế chống nước - BH 6 THÁNG',
            price: 205000,
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lysufjjnvia5a0.webp',
        },
        {
            id: 5,
            name: '[Diện mạo mới] Combo Dầu Gội, Dầu Xả TRESemmé Keratin Smooth Keratinbond+ Cho Tóc Khô Xơ Rối Vào Nếp Suôn Mượt 640g,620g',
            price: 330000,
            count_sell: Math.floor(Math.random() * 1000),
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0savf8usjxpc8.webp',
        },
        {
            id: 6,
            name: 'GoPro Hero13 Black Camera hành động chống nước, ảnh 27MP + video 5.3K, GPS, không bao gồm Lenses HB',
            price: 11847000,
            count_sell: Math.floor(Math.random() * 1000),
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzriiepu59r5a1.webp',
        },
    ]

    const banner = [
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0nzjolwtrbjcd',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0mppbscanl906',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0sa8wbzgsjz86',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0tlk8jwqzfx29',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0tq3cidumel18',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0tqt1n01ckt21',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0tqxbrgj9bh8d',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0tqj817hv9r7d',
        'https://cf.shopee.vn/file/vn-11134258-7ras8-m0sgdc8y7q3xb2',
    ]

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className="">
            <main className="flex-grow container py-8">
                <div className="w-full">
                    <Carousel
                        className="w-full"
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {banner.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="w-full h-[350px] relative">
                                        <Image
                                            src={item}
                                            alt=""
                                            className="absolute hover:scale-105 duration-500 object-cover"
                                            fill
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <h1 className="text-xl font-bold text-center mt-5 mb-3">
                    GỢI Ý HÔM NAY
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <Link href="/detailproduct" key={product.id}>
                            <Card className="overflow-hidden">
                                <CardHeader className="p-0">
                                    <div className="w-full h-56 relative overflow-hidden group">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute group-hover:scale-105 duration-500 object-cover"
                                            fill
                                        />
                                        <Image
                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m0llsdb5l2p90e"
                                            alt={product.name}
                                            className="absolute "
                                            fill
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-3">
                                    <h1 className="line-clamp-2">
                                        {product.name}
                                    </h1>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center gap-[1px] text-[#fe5e32]">
                                            <small className="text-[10px]">
                                                đ
                                            </small>
                                            <p className="text-md">
                                                {product.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="text-[11px]">
                                            Đã bán {product.count_sell}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}
