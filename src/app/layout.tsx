import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Kob Store | E-Commerce Worksshop',
    template: '%s | E-Commerce Workshop',
  },
  description:
    'ร้านค้าออนไลน์อันดับ 1 สำหรับสินค้าไอทีครบวงจร พร้อมบริการจัดส่งเร็วและราคาที่คุ้มค่า!',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
export default RootLayout
